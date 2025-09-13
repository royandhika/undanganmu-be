import { ResponseError } from "../utils/error.js";
import z from "zod";
import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger.js";

const formatZodError = (error: z.ZodError): string => {
    const formattedIssues = error.issues.map((issue) => {
        const path = issue.path.join(".");
        const message = issue.message;

        return `${path}: ${message}`;
    });

    return formattedIssues.join(", ");
};

export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    if (err instanceof z.ZodError) {
        res.status(400).json({
            success: false,
            errors: formatZodError(err),
        });
    } else if (err instanceof ResponseError) {
        res.status(err.status).json({
            success: false,
            errors: err.message,
        });
    } else {
        res.status(500).json({
            success: false,
            errors: err.message,
        });
    }
};
