import { Router } from "express";
import AuthController from "../../presentation/controllers/UserController.js";
import UserService from "../../business/services/UserService.js";

const router = Router();

const userService = new UserService();
const authController = new AuthController(userService);

router.post('/register',  authController.register.bind(authController));
router.post('/login', authController.login.bind(authController))
export default router;
