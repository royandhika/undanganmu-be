import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import apiRoutes from "./api/index.js";

dotenv.config();
const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Test API");
});

app.use("/api/v1", apiRoutes);

export default app;
