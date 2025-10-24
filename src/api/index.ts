import { Router } from "express";
import userRoutes from "./users/user.routes.js";
import authRoutes from "./auth/auth.routes.js";
import transactionRoutes from "./transactions/transaction.routes.js";
import webhookRoutes from "./webhooks/webhook.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/transactions", transactionRoutes);
router.use("/webhooks", webhookRoutes);

export default router;
