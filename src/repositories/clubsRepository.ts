import { ClubModel } from "../models/clubModel"

const database = [
    { id: 1, name: "Real Madrid" },
    { id: 2, name: "Barcelona" },
    { id: 3, name: "Manchester United" },
    { id: 4, name: "Manchester City" },
    { id: 5, name: "Liverpool" },
    { id: 6, name: "Chelsea" },
    { id: 7, name: "Arsenal" },
    { id: 8, name: "Bayern Munich" },
    { id: 9, name: "Borussia Dortmund" },
    { id: 10, name: "Juventus" },
    { id: 11, name: "AC Milan" },
    { id: 12, name: "Inter Milan" },
    { id: 13, name: "Paris Saint-Germain" },
    { id: 14, name: "Ajax" },
    { id: 15, name: "Benfica" },
    { id: 16, name: "Porto" },
    { id: 17, name: "Atletico Madrid" },
    { id: 18, name: "Roma" },
    { id: 19, name: "Napoli" },
    { id: 20, name: "Flamengo" }
];

export const findAllClubs = async():Promise<ClubModel[]> =>{
    return database
}