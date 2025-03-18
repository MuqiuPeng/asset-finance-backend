import { PrismaClient } from "@prisma/client";
import { PersonalInfoSchema } from "@/schemas/personalInfo";

const prisma = new PrismaClient();

export const createPersonalInfo = async (userId: string, data: PersonalInfoSchema) => {
    return await prisma.personalInfo.create({
        data: {
            ...data,
            userId
        }
    })
};

export const getPersonalInfos = async () => {
    return await prisma.personalInfo.findMany();
};

export const getPersonalInfoById = async (id: string) => {
    return await prisma.personalInfo.findUnique({ where: {id} })
};

export const updatePersonalInfo = async (id: string, data: PersonalInfoSchema) => {
    return await prisma.personalInfo.update({
        where: { id },
        data,
    });
};

export const deletePersonalInfo = async (id: string) => {
    return await prisma.personalInfo.delete({ where: { id } });
};