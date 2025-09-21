import { createSessionSchema, LoginDto } from "./auth.validation.js";
import * as userRepository from "../users/user.repository.js";
import * as authRepository from "./auth.repository.js";
import { ResponseError } from "../../utils/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

export const login = async (loginData: LoginDto, ipAddress: string): Promise<string> => {
    const { email, password } = loginData;

    const existingEmail = await userRepository.findByEmail(email);
    if (!existingEmail) {
        throw new ResponseError(400, "Email not registered");
    }

    const isPasswordValid = await bcrypt.compare(password, existingEmail.password);
    if (!isPasswordValid) {
        throw new ResponseError(400, "Invalid password");
    }

    const payload = { id: existingEmail.id, email: existingEmail.email };
    const token = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiresInSeconds });

    const sessionData = createSessionSchema.parse({
        sessionToken: token,
        userId: existingEmail.id,
        ipAddress: ipAddress,
        expiresAt: new Date(Date.now() + config.jwt.expiresInMillis),
    });
    await authRepository.create(sessionData);

    return token;
};

export const logout = async (token: string) => {
    await authRepository.disable(token);
};
