import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger.js";

const prisma = new PrismaClient({
    log: [
        { emit: "event", level: "query" },
        { emit: "event", level: "info" },
        { emit: "event", level: "warn" },
        { emit: "event", level: "error" },
    ],
});

prisma.$on("query", (e) => {
    logger.debug({ query: e.query, params: e.params, duration: e.duration }, "Prisma query");
});

prisma.$on("info", (e) => {
    logger.info(e, "Prisma info");
});

prisma.$on("warn", (e) => {
    logger.warn(e, "Prisma warn");
});

prisma.$on("error", (e) => {
    logger.error(e, "Prisma error");
});

export default prisma;
