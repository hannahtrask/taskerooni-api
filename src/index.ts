import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://taskerooni.vercel.app',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({
      error: 'Database connection failed',
      message: 'Unable to connect to MongoDB. Please try again later.'
    });
  }
});

app.use('/api/tasks', taskRoutes);

app.get('/health', async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: 'OK',
      message: 'Server is running',
      database: 'connected'
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: 'Database connection failed'
    });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Taskerooni API' });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;

