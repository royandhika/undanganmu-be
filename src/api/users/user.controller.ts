import { NextFunction, Request, Response } from "express";
import * as userService from "./user.service.js";
import z from "zod";
import { createUserSchema } from "./user.validation.js";

// CREATE READ UPDATE DELETE / GET POST PATCH PUT DELETE
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAll();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
    } catch (error: any) {}
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedData = createUserSchema.parse(req.body);

        const newUser = await userService.create(validatedData);

        res.status(201).json({
            success: true,
            data: newUser,
        });
    } catch (error: any) {
        next(error);
    }
};
