import pino from "pino";

const developmentLogger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
            ignore: "pid,hostname",
        },
    },
});

const productionLogger = pino({
    transport: {
        target: "pino/file",
        options: { destination: "../logs/app.log", mkdir: true },
    }
});

const logger = process.env.NODE_ENV === "production" ? productionLogger : developmentLogger;

export default logger;
