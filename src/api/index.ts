import { Router } from "express";
import userRoutes from "./users/user.routes.js";
import authRoutes from "./auth/auth.routes.js";
import transactionRoutes from "./transactions/transaction.routes.js";
import invitationRoutes from "./invitations/invitation.routes.js";
import webhookRoutes from "./webhooks/webhook.routes.js";
import templateRoutes from "./templates/template.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/transactions", transactionRoutes);
router.use("/invitations", invitationRoutes);
router.use("/webhooks", webhookRoutes);
router.use("/templates", templateRoutes);

export default router;
