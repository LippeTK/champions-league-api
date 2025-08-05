import {Request, Response} from "express"
import {getPlayerDataService, getPlayerByIdService} from "../services/playersService"

export const getPlayer = async (req:Request, res:Response) =>{

    const httpResponse = await getPlayerDataService()

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getPlayerById = async (req:Request, res:Response) =>{
    
    const id = parseInt(req.params.id)
    const httpResponse = await getPlayerByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}
