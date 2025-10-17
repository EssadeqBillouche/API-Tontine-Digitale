import express from 'express'
import { connectionDataBase } from '../infrastructure/config/db.js';
import authRouter from "../presentation/routes/auth.route.js"
import groupRouter from "../presentation/routes/group.route.js"

const app = express();

connectionDataBase();

app.use(express.json());

app.use('/api-v1/auth', authRouter);
// app.use('/api-v1/KYC', )  

app.use('/api-v1/group', groupRouter)

export default app;