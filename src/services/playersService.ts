import { findAllPlayers, findPlayerById } from "../repositories/playersRepository"
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