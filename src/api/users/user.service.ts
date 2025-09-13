import prisma from "../../db/prisma.js";
import { CreateUserDto, UserDto, userSchema } from "./user.validation.js";
import bcrypt from "bcrypt";
import { ResponseError } from "../../utils/error.js";

export const findAll = async () => {
    const users = await prisma.user.findMany();
    return users;
};

export const create = async (userData: CreateUserDto): Promise<UserDto> => {
    const { email, password, name, phone } = userData;

    const existingEmail = await prisma.user.findUnique({
        where: { email },
    });
    if (existingEmail) {
        throw new ResponseError(400, "Email already in use");
    }

    const existingPhone = await prisma.user.findUnique({
        where: { phone },
    });
    if (existingPhone) {
        throw new ResponseError(400, "Phone is already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            phone,
        },
    });

    const response = userSchema.parse(newUser);
    return response;
};
