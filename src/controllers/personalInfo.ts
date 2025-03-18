import { Request, Response } from 'express';
import { createPersonalInfo, getPersonalInfos, getPersonalInfoById, updatePersonalInfo, deletePersonalInfo } from '@/services/personalInfo';

export const createPersonalInfoController = async (req: Request, res: Response) => {
    try {
        const { userId, ...data } = req.body;
        const personalInfo = await createPersonalInfo(userId, data);
        res.status(201).json(personalInfo);
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const updatePersonalInfoController = async (req: Request, res: Response) => {
    try {
        const { id, ...data } = req.body;
        const personalInfo = await updatePersonalInfo(id, data);
        if (personalInfo) {
            res.status(200).json(personalInfo);
        } else {
            res.status(404).json({ message: 'Personal information not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const getPersonalInfosController = async (req: Request, res: Response) => {
    try {
        const personalInfos = await getPersonalInfos();
        res.status(200).json(personalInfos);
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const getPersonalInfoByIdController = async (req: Request, res: Response) => {
    try {
        const personalInfo = await getPersonalInfoById(req.params.id);
        if (personalInfo) {
            res.status(200).json(personalInfo);
        } else {
            res.status(404).json({ message: 'Personal information not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const deletePersonalInfoController = async (req: Request, res: Response) => {
    try {
        const personalInfo = await deletePersonalInfo(req.params.id);
        if (personalInfo) {
            res.status(200).json({ message: 'Personal information deleted successfully' });
        } else {
            res.status(404).json({ message: 'Personal information not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}
