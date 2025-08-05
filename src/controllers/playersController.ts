import {Request, Response} from "express"
import * as service from "../services/playersService"

export const getPlayer = async (req:Request, res:Response) =>{
    const httpResponse = await service.getPlayerDataService()

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getPlayerById = async (req:Request, res:Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await service.getPlayerByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const insertPlayer = async(req:Request, res:Response) => {
    const player = req.body
    const httpResponse = await service.insertPlayerService(player)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deletePlayer = async(req:Request, res:Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await service.deletePlayerService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}