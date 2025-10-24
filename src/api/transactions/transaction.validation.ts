import z from "zod";

export const createTransactionSchema = z.object({
    userId: z.string(),
    userEmail: z.email(),
    totalAmount: z.float64(),
});
export type CreateTransactionDto = z.infer<typeof createTransactionSchema>;

export const updateXenditTransactionSchema = z.object({
    id: z.string(),
    xenditId: z.string(),
    invoiceUrl: z.url(),
});
export type UpdateXenditTransactionDto = z.infer<typeof updateXenditTransactionSchema>;
