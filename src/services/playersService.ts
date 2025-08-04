import { findAllPlayers } from "../repositories/playersRepository"
import { noContent, ok } from "../utils/httpHelper"

const getPlayerData = async() => {
    const data = await findAllPlayers()
    let response = null
    
    if(data){
        response = await ok(data)
    }else{
        response = noContent()
    }
    return response
}

export default getPlayerData
