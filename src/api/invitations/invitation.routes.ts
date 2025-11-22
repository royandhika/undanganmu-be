import { Router } from "express";
import { authMiddleware } from "../../middleware/authHandler.js";
import * as invitationController from "./invitation.controller.js";

const router = Router();

router.get("/", authMiddleware, invitationController.getMyInvitation);
router.put("/:id", authMiddleware, invitationController.editInvitation);

export default router;
