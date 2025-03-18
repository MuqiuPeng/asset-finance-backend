import { Request, Response } from 'express';
import { sendVerificationEmail, verifyEmailToken } from '@/services/auth';

export const requestEmailVerificationController = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        await sendVerificationEmail(email);
        res.json({ message: 'Verification email sent. Please check your inbox.' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending verification email' });
    }
};

export const verifyEmailTokenController = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const isValid = await verifyEmailToken(token);
        if (isValid) {
            res.json({ message: 'Email successfully verified.' });
        } else {
            res.status(400).json({ message: 'Invalid or expired token.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying email token' });
    }
};
