import { PlayerModel } from "../models/playerModel"
import { StatisticsModel } from "../models/statisticsModel"
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/playersRepository"
import * as HttpResponse from "../utils/httpHelper"

export const getPlayerDataService = async() => {
    const data = await findAllPlayers()
    let response = null
    
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const getPlayerByIdService = async(id:number) => {
    const data = await findPlayerById(id)

    let response = null
    
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }

    return response
}

export const insertPlayerService = async(player:PlayerModel) => {
    let response = null

    if(Object.keys(player).length !== 0){
        const data = await insertPlayer(player)
        response = await HttpResponse.created()
    }else{
        response = await HttpResponse.badRequest()
    }

    return response
}

export const deletePlayerService = async(id:number) => {
    let response = null
    await deleteOnePlayer(id)

    response = await HttpResponse.ok({message: "deleted"})
    return response
}

export const updatePlayerService = async(id:number, statistics:StatisticsModel) => {
    let response = null
    const data = await findAndModifyPlayer(id, statistics)

   if (!data) {
        response = await HttpResponse.badRequest()
    }else{
        response = await HttpResponse.ok(data)
    }
    return response
}