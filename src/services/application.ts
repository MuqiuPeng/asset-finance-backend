import { PrismaClient } from "@prisma/client";
import { ApplicationSchema } from "@/schemas/application";

const prisma = new PrismaClient();

export const createApplication = async (userId: string, personalInfoId: string, data: ApplicationSchema) => {
    return await prisma.application.create({
        data: {
            ...data,
            userId,
            personalInfoId
        }
    })
};

export const getApplications = async () => {
    return await prisma.application.findMany();
};

export const getApplicationById = async (id: string) => {
    return await prisma.application.findUnique({ where: {id} })
};

export const updateApplication = async (id: string, data: ApplicationSchema) => {
    return await prisma.application.update({
        where: { id },
        data,
    });
};

export const deleteApplication = async (id: string) => {
    return await prisma.application.delete({ where: { id } });
};