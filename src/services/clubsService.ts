import { findAllClubs } from "../repositories/clubsRepository"
import * as HttpResponse from "../utils/httpHelper"

export const getClubService = async() => {
    const data = await findAllClubs()
        let response = null
        
        if(data){
            response = await HttpResponse.ok(data)
        }else{
            response = await HttpResponse.noContent()
        }
        return response

}