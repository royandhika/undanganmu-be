// File ini mendefinisikan endpoint khusus untuk user.

//    1 // src/api/users/user.routes.ts
//    2 import { Router } from 'express';
//    3 import * as userController from './user.controller.js';
//    4
//    5 const router = Router();
//    6
//    7 router.get('/', userController.getAllUsers);
//    8
//    9 export default router;

import { Router } from "express";
import * as userController from "./user.controller.js";

const router = Router();

router.get("/", userController.getAllUsers);

export default router;
