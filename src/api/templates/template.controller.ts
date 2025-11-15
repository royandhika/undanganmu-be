import { Request, Response, NextFunction } from "express";
import * as templateService from "./template.service.js";

export const createDefault = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const transactionResponse = await templateService.createDefault();

        res.status(201).json({
            success: true,
            data: transactionResponse,
        });
    } catch (err: any) {
        next(err);
    }
};
