import prisma from "../../db/prisma.js";
import { CreateInvitationDto, UpdateInvitationDto } from "./invitation.validation.js";

export const createFree = (invitationData: CreateInvitationDto) => {
    return prisma.invitation.create({
        data: {
            ...invitationData,
        },
    });
};

export const findById = (id: string) => {
    return prisma.invitation.findUnique({
        where: { id },
    });
};

export const findByUserId = (userId: string) => {
    return prisma.invitation.findMany({
        where: { userId },
    });
};

export const update = (id: string, invitationData: UpdateInvitationDto) => {
    return prisma.invitation.update({
        where: { id },
        data: {
            ...invitationData,
        },
    });
};
