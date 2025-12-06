import { Hono } from "hono";
import Stripe from "stripe";
import { db } from "../../db/drizzle";
import { charity } from "../../db/schema";
import { StripeSchema } from "@hack-for-change/common";

export const stripeWebhook = new Hono();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any, // 型回避
});

stripeWebhook.post("/", async (c) => {
  const signature = c.req.header("stripe-signature")!;
  const raw = await c.req.arrayBuffer();

  try {
    const event = stripe.webhooks.constructEvent(
      Buffer.from(raw),
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // metadata から取得
      const donor_name = session.metadata?.donor_name ?? "unknown";
      const price = Number(session.metadata?.price ?? 0);

      // DBに保存（create_at は DB 側で NOW() が入る）
      const inserted = await db.insert(charity).values({
        donor_name,
        price,
      }).returning();

      // DrizzleSchema で parse する場合、create_at を文字列に変換
      const parsed = StripeSchema.parse({
        ...inserted[0],
        create_at: new Date(inserted[0].create_at).toISOString(),
      });

      console.log(`🎉 Donation saved: ${parsed.donor_name}, ¥${parsed.price}`);
    }

  } catch (e) {
    console.error("❌ Webhook error", e);
    return c.text("Webhook Error", 400);
  }

  return c.text("OK", 200);
});

export default stripeWebhook;
