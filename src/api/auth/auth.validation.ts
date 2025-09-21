import z from "zod";

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
})
.strict();
export type LoginDto = z.infer<typeof loginSchema>;

export const createSessionSchema = z.object({
    sessionToken: z.string(),
    userId: z.string(),
    ipAddress: z.string().optional(),
    expiresAt: z.date(),
}).strict();
export type CreateSessionDto = z.infer<typeof createSessionSchema>;
