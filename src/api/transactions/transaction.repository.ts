import prisma from "../../db/prisma.js";
import { CreateTransactionDto, UpdateXenditTransactionDto } from "./transaction.validation.js";
import { Prisma } from "@prisma/client";

export const create = (transactionData: CreateTransactionDto) => {
    return prisma.transaction.create({
        data: {
            totalAmount: transactionData.totalAmount,
            users: {
                connect: { id: transactionData.userId },
            },
        },
    });
};

export const updateTransaction = (xenditData: UpdateXenditTransactionDto) => {
    return prisma.transaction.update({
        where: { id: xenditData.id },
        data: {
            xenditId: xenditData.xenditId,
            invoiceUrl: xenditData.invoiceUrl,
        },
    });
};

export const findById = (id: string) => {
    return prisma.transaction.findUnique({
        where: { id },
    });
};

export const updatePaidTransaction = (id: string) => {
    return prisma.transaction.update({
        where: { id },
        data: {
            status: "PAID",
        },
    });
};
