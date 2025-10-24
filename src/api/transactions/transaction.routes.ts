import { Router } from "express";
import { authMiddleware } from "../../middleware/authHandler.js";
import * as transactionController from "./transaction.controller.js";

const router = Router();

router.post("/", authMiddleware, transactionController.create);

export default router;
