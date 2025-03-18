import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'tsconfig-paths/register';
import userRoutes from '@/routes/userRoutes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3300;

app.use(cors({credentials: true}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
