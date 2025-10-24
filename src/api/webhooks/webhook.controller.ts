import { Request, Response, NextFunction } from "express";
import * as transactionService from "../transactions/transaction.service.js";
import { xenditBodySchema } from "./webhook.validation.js";

export const handleXenditCallback = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Xendit token verification
        const xenditToken = req.headers["x-callback-token"];
        if (xenditToken !== process.env.XENDIT_CALLBACK_TOKEN) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        const payload = xenditBodySchema.parse(req.body);
        await transactionService.handleXenditCallback(payload);

        res.status(200).json({
            success: true,
            message: "Xendit webhook received",
        });
    } catch (err: any) {
        next(err);
    }
};
