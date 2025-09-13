import express, { Express, Request, Response } from "express";
import apiRoutes from "./api/index.js";
import logger from "./utils/logger.js";
import { pinoHttp } from "pino-http";
import { errorHandler } from "./middleware/errorHandler.js";

const app: Express = express();

// Use logger
app.use(pinoHttp({ logger }));
// Json parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Test API");
});

// Routes
app.use("/api/v1", apiRoutes);

// Error middleware
app.use(errorHandler);

export default app;
