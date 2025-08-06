import express, {json, Request, Response} from "express"
import router from "./routes/playerRoutes"
import clubsRouter from "./routes/clubsRoutes"
import cors from "cors"

function createApp(){
    const app = express()

    app.use(json())
    app.use(cors())

    app.use('/', router)
    app.use('/clubs', clubsRouter)
    return app
}

export default createApp
