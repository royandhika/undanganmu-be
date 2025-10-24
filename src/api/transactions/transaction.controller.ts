import { Request, Response, NextFunction } from "express";
import * as transactionService from "./transaction.service.js";
import { createTransactionSchema } from "./transaction.validation.js";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const transactionRequest = createTransactionSchema.parse({
            ...req.body,
            userId: req.user!.id,
            userEmail: req.user!.email,
        });
        const transactionResponse = await transactionService.create(transactionRequest);

        res.status(201).json({
            success: true,
            data: transactionResponse,
        });
    } catch (err: any) {
        next(err);
    }
};
