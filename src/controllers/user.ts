import { Request, Response } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '@/services/user';

export const createUserController = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const { id, ...data } = req.body;
        const user = await updateUser(id, data);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const user = await getUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const user = await deleteUser(req.params.id);
        if (user) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
}
