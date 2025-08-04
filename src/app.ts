import express, {json, Request, Response} from "express"
import router from "./routes/playerRoutes"

function createApp(){
    const app = express()

    app.use(json())

    app.use('/', router)
    return app
}

export default createApp