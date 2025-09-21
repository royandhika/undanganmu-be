import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import * as UserRepository from "../api/users/user.repository.js";
import * as AuthRepository from "../api/auth/auth.repository.js";

declare global {
    namespace Express {
        interface Request {
            user?: import("../api/users/user.validation.js").UserDto;
        }
    }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw new ResponseError(401, "Unauthorized");
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string };

        const isValidToken = await AuthRepository.findByToken(token);
        if (!isValidToken) {
            throw new ResponseError(401, "Unauthorized");
        }

        const user = await UserRepository.findByEmail(payload.email);
        if (!user) {
            throw new ResponseError(401, "Unauthorized");
        }

        req.user = user;
        next();
    } catch (err: any) {
        next(err);
    }
};
