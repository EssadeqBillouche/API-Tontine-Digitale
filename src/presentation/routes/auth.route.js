import { Router } from "express";
import AuthController from "../../presentation/controllers/UserController.js";
import UserService from "../../business/services/UserService.js";
import {checkIfUserLogin} from "../middleware/checkIfUserLogin.js"

const router = Router();

const userService = new UserService();
const authController = new AuthController(userService);

router.post('/register',  authController.register.bind(authController), checkIfUserLogin);
router.post('/login', authController.login.bind(authController), checkIfUserLogin)
export default router;
