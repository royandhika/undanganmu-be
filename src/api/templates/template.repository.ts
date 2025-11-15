import prisma from "../../db/prisma.js";

export const createDefaultTemplate = () => {
    return prisma.template.create({
        data: {
            id: "default",
        },
    });
};

export const findById = (id: string) => {
    return prisma.template.findUnique({
        where: { id },
    });
};
