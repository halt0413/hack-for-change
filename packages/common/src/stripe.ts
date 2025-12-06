import { z } from 'zod';

export const StripeSchema = z.object({
    id: z.string().uuid(),
    donor_name: z.string(),
    price: z.number(),
    create_at: z.string(),
    
})

export type StripeType = z.infer<typeof StripeSchema>