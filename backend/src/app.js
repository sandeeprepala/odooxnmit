import express from 'express';
// import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
// app.use(cors());
import cors from "cors";

app.use(cors({
  origin: "http://localhost:5173",  // your React/Vite frontend
  credentials: true                 // allow cookies & auth headers
}));


app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser()); // Middleware to parse cookies


// Import routes
import userRouter from './routes/userRoute.js';
// Use routes
app.use('/api/v1/users', userRouter);

export { app };