import { Router } from "express";
import * as controller from "../controllers/clubsController";

const clubsRouter = Router()

clubsRouter.get('/', controller.getClubs)

export default clubsRouter