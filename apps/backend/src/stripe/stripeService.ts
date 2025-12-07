import { Hono } from "hono";
import { stripeRepo } from './stripeRepositry'
import { StripeType } from '@hack-for-change/common'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const stripeService = {
    async charity(): Promise<StripeType[]> {
        return await stripeRepo.charty()
    },

    async createCheckout( donor_name: string, price: number) {
    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
        {
            price_data: {
                currency: "jpy",
                product_data: {
                    name: donor_name
                },
                unit_amount: price 
            },
            quantity: 1,
            },
        ],
        metadata: {
            donor_name: donor_name,
            price: price.toString(),
        },
        success_url: "http://localhost:3000/web",
        cancel_url: "http://localhost:3000/web",
    })

    return session.url // ← フロントが飛ぶURL
    }
}