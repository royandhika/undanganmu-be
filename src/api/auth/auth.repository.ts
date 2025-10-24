import prisma from "../../db/prisma.js";
import { CreateSessionDto } from "./auth.validation.js";
import { PrismaClient } from "@prisma/client";

export const create = (sessionData: CreateSessionDto, db: PrismaClient = prisma) => {
    return db.session.create({
        data: {
            ...sessionData,
        },
    });
};

export const findByToken = (sessionToken: string, db: PrismaClient = prisma) => {
    return db.session.findUnique({
        where: { sessionToken, expiresAt: { gte: new Date() }, deletedAt: null },
    });
};

export const disable = (token: string, db: PrismaClient = prisma) => {
    return db.session.update({
        where: { sessionToken: token },
        data: {
            deletedAt: new Date(),
        },
    });
};
