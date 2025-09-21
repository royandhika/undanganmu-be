import { ResponseError } from "../utils/error.js";

const expiresInDays = Number(process.env.JWT_EXPIRES_IN_DAYS!) || "14";
const secret = process.env.JWT_SECRET!;
if (!expiresInDays) {
    throw new ResponseError(500, "JWT configuration error");
}

export const config = {
    jwt: {
        secret,
        expiresInSeconds: Number(expiresInDays) * 24 * 60 * 60,
        expiresInMillis: Number(expiresInDays) * 24 * 60 * 60 * 1000,
    },
};
