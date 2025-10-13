import express from 'express'
import { connectionDataBase } from '../infrastructure/config/db.js';
import authRouter from "../presentation/routes/auth.route.js"

const app = express();

connectionDataBase();

app.use(express.json());

app.use('/api-v1/auth/', authRouter);
app.use('/api-v1/KYC', )

export default app;