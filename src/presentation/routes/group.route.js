import { Router } from "express";
import GroupController from "../controllers/GroupController.js";
import GroupService from "../../business/services/GroupServicer.js";


const router = Router();


router.get('/')