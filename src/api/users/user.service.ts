import prisma from "../../db/prisma.js";
import { CreateUserDto, UserDto, userSchema } from "./user.validation.js";
import bcrypt from "bcrypt";
import { ResponseError } from "../../utils/error.js";
import * as userRepository from "./user.repository.js";

export const create = async (userData: CreateUserDto): Promise<UserDto> => {
    const { email, password, phone } = userData;

    const existingEmail = await userRepository.findByEmail(email);
    if (existingEmail) {
        throw new ResponseError(400, "Email already registered");
    }

    const existingPhone = await userRepository.findByPhone(phone);
    if (existingPhone) {
        throw new ResponseError(400, "Phone already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.create(userData, hashedPassword);
    const response = userSchema.parse(newUser);

    return response;
};

export const findById = async (id: string): Promise<UserDto> => {
    const user = await userRepository.findById(id);
    const response = userSchema.parse(user);

    return response;
};
