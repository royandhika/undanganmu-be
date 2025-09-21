import { Router } from "express";
import * as authController from "./auth.controller.js";
import { authMiddleware } from "../../middleware/authHandler.js";

const router = Router();

router.post("/login", authController.login);
router.post("/logout", authMiddleware, authController.logout);

export default router;
