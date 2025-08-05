import { Router } from "express";
import * as controller from "../controllers/playersController";

const router = Router()

router.get('/players', controller.getPlayer)
router.get('/player/:id', controller.getPlayerById)
router.post('/players', controller.insertPlayer)
router.delete('/player/:id', controller.deletePlayer)
router.patch('/player/:id', controller.updatePlayer)

export default router