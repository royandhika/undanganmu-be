import { Router } from "express";
import * as templateController from "./template.controller.js";

const router = Router();

router.post("/default", templateController.createDefault);

export default router;
