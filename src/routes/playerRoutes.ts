import { Router } from "express";
import { getPlayerById, getPlayer } from "../controllers/playersController";

const router = Router()

router.get('/players', getPlayer)
router.get('/player/:id', getPlayerById)

export default router