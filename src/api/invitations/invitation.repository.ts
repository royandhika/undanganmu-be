import prisma from "../../db/prisma.js";
import { CreateInvitationDto } from "./invitation.validation.js";
import { PrismaClient } from "@prisma/client";

export const create = (invitationData: CreateInvitationDto, db: PrismaClient = prisma) => {
    return db.invitation.create({
        data: {
            ...invitationData,
        },
    });
};
