import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service.js";
import { loginSchema } from "./auth.validation.js";
import { config } from "../config.js";
import { ResponseError } from "../../utils/error.js";
import logger from "../../utils/logger.js";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loginData = loginSchema.parse(req.body);
        const token = await authService.login(loginData, req.ip!);

        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict" as const,
            maxAge: config.jwt.expiresInMillis,
        };
        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            success: true,
            data: {
                token: token,
            },
        });
    } catch (error: any) {
        next(error);
    }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await authService.logout(req.cookies.token);

        res.clearCookie("token");

        res.status(200).json({
            success: true,
            data: {
                message: "Logged out successfully",
            },
        });
    } catch (err: any) {
        next(err);
    }
};
