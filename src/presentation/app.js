import express from 'express'
import { connectionDataBase } from '../infrastructure/config/db.js';

const app = express();

connectionDataBase();



export default app;