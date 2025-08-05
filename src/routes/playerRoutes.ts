import { Router } from "express";
import { getPlayerById, getPlayer, insertPlayer } from "../controllers/playersController";

const router = Router()

router.get('/players', getPlayer)
router.get('/player/:id', getPlayerById)
router.post('/players', insertPlayer)

export default router