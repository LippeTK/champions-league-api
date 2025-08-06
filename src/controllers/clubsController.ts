import {Request, Response} from "express"
import * as service from "../services/playersService"
import { getClubService } from "../services/clubsService"


export const getClubs = async (req:Request, res:Response) => {
    const httpResponse = await getClubService()

     res.status(httpResponse.statusCode).json(httpResponse.body)
}