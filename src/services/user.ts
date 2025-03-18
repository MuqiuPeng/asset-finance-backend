import { PrismaClient } from "@prisma/client";
import { UserSchema } from "@/schemas/user";

const prisma = new PrismaClient();

export const createUser = async (data: UserSchema) => {
    return await prisma.user.create({ data })
};

export const getUsers = async () => {
    return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
    return await prisma.user.findUnique({ where: {id} })
};

export const updateUser = async (id: string, data: UserSchema) => {
    return await prisma.user.update({
        where: { id },
        data,
    });
};

export const deleteUser = async (id: string) => {
    return await prisma.user.delete({ where: { id } });
};