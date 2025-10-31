import z from "zod";

export const createInvitationSchema = z.object({
    transactionId: z.string(),
    userId: z.string(),
    templateId: z.string(),
    weddingDate: z.date(),
    address: z.string(),
    message: z.string().optional(),
});
export type CreateInvitationDto = z.infer<typeof createInvitationSchema>;
