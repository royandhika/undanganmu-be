import { NextFunction, Request, Response } from "express";
import * as userService from "./user.service.js";
import { createUserSchema } from "./user.validation.js";

// CREATE READ UPDATE DELETE / GET POST PATCH PUT DELETE
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedData = createUserSchema.parse(req.body);
        const newUser = await userService.create(validatedData);

        res.status(201).json({
            success: true,
            data: newUser,
        });
    } catch (err: any) {
        next(err);
    }
};

export const getMyUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.findById(req.user!.id);

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (err: any) {
        next(err);
    }
};
