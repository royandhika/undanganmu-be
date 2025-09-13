import z from "zod";
import { Role } from "@prisma/client";

export const createUserSchema = z
    .object({
        email: z.email(),
        password: z.string().min(8),
        name: z.string().min(1),
        phone: z.string().min(7),
    })
    .strict();
export type CreateUserDto = z.infer<typeof createUserSchema>;

export const userSchema = z.object({
    id: z.string(),
    email: z.email(),
    name: z.string(),
    phone: z.string(),
    role: z.enum(Role),
    createdAt: z.date(),
    updatedAt: z.date(),
});
export type UserDto = z.infer<typeof userSchema>;
