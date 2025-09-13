import { Router } from "express";
import * as userController from "./user.controller.js";

const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);

export default router;
