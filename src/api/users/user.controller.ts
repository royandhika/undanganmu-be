// Controller ini akan memanggil service dan mengurus request & response.

//     1 // src/api/users/user.controller.ts
//     2 import { Request, Response } from 'express';
//     3 import * as userService from './user.service.js';
//     4
//     5 export const getAllUsers = async (req: Request, res: Response) => {
//     6   try {
//     7     const users = await userService.findAllUsers();
//     8     res.status(200).json(users);
//     9   } catch (error: any) {
//    10     res.status(500).json({ error: error.message });
//    11   }
//    12 };
//    13
//    14 // Nanti Anda bisa menambahkan controller lain di sini
//    15 /*
//    16 export const getUserById = async (req: Request, res: Response) => {
//    17   // ...
//    18 }
//    19 */

import { Request, Response } from "express";
import * as userService from "./user.service.js";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAllusers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
