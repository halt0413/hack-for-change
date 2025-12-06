import { db } from "../db/drizzle";
import { eq } from "drizzle-orm"; 
import { charity } from "../db/schema";
import { StripeType, StripeSchema } from '@hack-for-change/common'

export const stripeRepo = {
    async charty(): Promise<StripeType[]> {
        const result = await db.select().from(charity);
        return result.map(r => StripeSchema.parse({
            ...r,
            create_at: r.create_at.toISOString(), 
            donor_name: r.donor_name             
        }));
    },
}
