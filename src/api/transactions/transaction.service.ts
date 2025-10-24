import prisma from "../../db/prisma.js";
import * as transactionRepository from "./transaction.repository.js";
import * as invitationRepository from "../invitations/invitation.repository.js";
import { CreateTransactionDto, createTransactionSchema } from "./transaction.validation.js";
import { xenditClient, Invoice } from "../../external/xendit.js";
import { CreateInvoiceRequest } from "xendit-node/invoice/models/CreateInvoiceRequest.js";
import { ResponseError } from "../../utils/error.js";
import logger from "../../utils/logger.js";
import { XenditBodyDto } from "../webhooks/webhook.validation.js";

export const create = async (transactionData: CreateTransactionDto) => {
    // Create transaction in table
    const transaction = await transactionRepository.create(transactionData);
    let response = {};

    try {
        // Create xendit invoice
        const data: CreateInvoiceRequest = {
            externalId: transactionData.userId + "-" + transaction.id,
            amount: transactionData.totalAmount,
            invoiceDuration: 172800,
            payerEmail: transactionData.userEmail,
            shouldSendEmail: true,
        };
        // Send to xendit
        const responseXendit = await Invoice.createInvoice({ data });

        const updateXenditData = {
            id: transaction.id,
            invoiceUrl: responseXendit.invoiceUrl,
            xenditId: responseXendit.id!,
        };

        // Update table with xendit response
        response = await transactionRepository.updateTransaction(updateXenditData);
    } catch (err: any) {
        throw new ResponseError(500, "Failed to create invoice");
    }

    return response;
};

export const handleXenditCallback = async (payload: XenditBodyDto) => {
    // Extract transactionId
    const transactionId = payload.external_id.split("-")[1];

    const transaction = await transactionRepository.findById(transactionId);
    if (!transaction) {
        throw new ResponseError(404, "Transaction not found");
    }

    if (transaction.status === "PAID") {
        return;
    }

    if (payload.status === "PAID") {
        await transactionRepository.updatePaidTransaction(transactionId);
    }
};
