import { Router } from "express";
import * as userController from "./user.controller.js";
import { authMiddleware } from "../../middleware/authHandler.js";

const router = Router();

router.post("/", userController.createUser);
router.get("/me", authMiddleware, userController.getMyUser);

export default router;
