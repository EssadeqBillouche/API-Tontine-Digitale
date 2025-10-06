import express from 'express'
import { connectionDataBase } from '../data/database/db';

const app = express();

connectionDataBase();



export default app;