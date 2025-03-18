import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

export const sendVerificationEmail = async (email: string) => {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '15m' });
    const verificationLink = `${FRONTEND_URL}/verify?token=${token}`;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify Your Email',
        text: `Click the following link to complete your registration of AssetFinance: ${verificationLink}`,
    };
    await transporter.sendMail(mailOptions);
};

export const verifyEmailToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
        return decoded.email;
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
};

