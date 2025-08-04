import { PlayerModel } from "../models/playerModel"

const database: PlayerModel[] = [
    {id: 1, name: "Ronaldo"},
    {id: 2, name: "Messi"},
    {id: 3, name: "Neymar"}
]

export const findAllPlayers = async():Promise<PlayerModel[]> =>{
    return database
}

export const findPlayerById = async(id:number):Promise<PlayerModel | undefined> => {
    const player = database.find((player) => player.id === id)
    return player
}