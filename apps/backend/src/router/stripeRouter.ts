import { Hono } from "hono";
import { stripeService } from '../stripe/stripeService';
import { error } from "console";

const stripeRouter = new Hono()

stripeRouter.get("/", async (c) => {
    const result = await stripeService.charity()
    return c.json({ success: true, result})
})

stripeRouter.post("/checkout", async (c) => {
    try {
        let { donor_name, price } = await c.req.json();

        if(!donor_name) {
            donor_name = "匿名";
        }


        if(!price) {
            // return c.json({ error: "金額が必要です"}, 400)
            price = 1000;
        }


        const url = await stripeService.createCheckout(donor_name, price)
        return c.json({ url })

    } catch (err: unknown) {
        if (err instanceof Error) {
        console.error("Checkout Error:", err)
        return c.json({ error: err.message }, 500)
        }
        console.error("Checkout Error (unknown):", err)
        return c.json({ error: "Internal Server Error" }, 500)
    }
})


export default stripeRouter 