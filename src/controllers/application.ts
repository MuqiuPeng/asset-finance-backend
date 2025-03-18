import { Request, Response } from 'express';
import { createApplication, getApplications, getApplicationById, updateApplication, deleteApplication } from '@/services/application';

export const createApplicationController = async (req: Request, res: Response) => {
    try {
        const { userId, personalInfoId, ...data } = req.body;
        const application = await createApplication(userId, personalInfoId, data);
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const updateApplicationController = async (req: Request, res: Response) => {
    try {
        const { id, ...data } = req.body;
        const application = await updateApplication(id, data);
        if (application) {
            res.status(200).json(application);
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const getApplicationsController = async (req: Request, res: Response) => {
    try {
        const applications = await getApplications();
        res.status(200).json(applications);
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const getApplicationByIdController = async (req: Request, res: Response) => {
    try {
        const application = await getApplicationById(req.params.id);
        if (application) {
            res.status(200).json(application);
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const deleteApplicationController = async (req: Request, res: Response) => {
    try {
        const application = await deleteApplication(req.params.id);
        if (application) {
            res.status(200).json({ message: 'Application deleted successfully' });
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}
