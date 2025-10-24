import { Request, Response, Router } from "express";
import * as webhookController from "./webhook.controller.js";

const router = Router();

router.get("/xendit", (req: Request, res: Response) => {
    res.send("Midtrans webhook endpoint");
});
router.post("/xendit", webhookController.handleXenditCallback);

export default router;
