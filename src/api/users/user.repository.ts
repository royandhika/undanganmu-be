import prisma from "../../db/prisma.js";
import { CreateUserDto } from "./user.validation.js";

export const findByEmail = (email: string) => {
    return prisma.user.findUnique({
        where: { email },
    });
};

export const findByPhone = (phone: string) => {
    return prisma.user.findUnique({
        where: { phone },
    });
};

export const create = (userData: CreateUserDto, hashedPassword: string) => {
    return prisma.user.create({
        data: {
            ...userData,
            password: hashedPassword,
        },
    });
};

export const findById = (id: string) => {
    return prisma.user.findUnique({
        where: { id },
    });
};
