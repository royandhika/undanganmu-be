import prisma from "../../db/prisma.js";
import { CreateSessionDto } from "./auth.validation.js";

export const create = (sessionData: CreateSessionDto) => {
    return prisma.session.create({
        data: {
            ...sessionData,
        },
    });
};

export const findByToken = (sessionToken: string) => {
    return prisma.session.findUnique({
        where: { sessionToken, expiresAt: { gte: new Date() }, deletedAt: null },
    });
};

export const disable = (token: string) => {
    return prisma.session.update({
        where: { sessionToken: token },
        data: {
            deletedAt: new Date(),
        },
    });
};
