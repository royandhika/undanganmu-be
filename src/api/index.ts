import { Router } from "express";
import userRoutes from "./users/user.routes.js";
import authRoutes from "./auth/auth.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
