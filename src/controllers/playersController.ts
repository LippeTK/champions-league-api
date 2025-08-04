import {Request, Response} from "express"
import getPlayerData from "../services/playersService"

const getPlayer = async (req:Request, res:Response) =>{

    const HttpResponse = await getPlayerData()

    res.status(HttpResponse.statusCode).json(HttpResponse.body)

}

export default getPlayer
