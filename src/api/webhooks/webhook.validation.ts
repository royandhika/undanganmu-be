import z from "zod";

export const xenditBodySchema = z.object({
    id: z.string(),
    amount: z.number(),
    status: z.string(),
    created: z.string(),
    is_high: z.boolean(),
    paid_at: z.string(),
    updated: z.string(),
    user_id: z.string(),
    currency: z.string(),
    bank_code: z.string(),
    external_id: z.string(),
    paid_amount: z.number(),
    payer_email: z.email(),
    merchant_name: z.string(),
    payment_method: z.string(),
    payment_channel: z.string(),
    payment_destination: z.string(),
});
export type XenditBodyDto = z.infer<typeof xenditBodySchema>;
