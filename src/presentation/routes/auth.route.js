import { Router } from "express";
import * as UserConstroller from "../controllers/UserController.js"
const router = Router();

router.post('/auth/register', UserConstroller.register);

export default router;
