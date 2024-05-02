import {parseJson} from "../../utils/parseJson";
import WSError from "../../error/WSError";
import {ErrorHandlingMiddleware} from "../../middleware/ErrorHandling.middleware";
import {WebSocket} from "ws";
import {SocketRequest} from "../../types/SocketRequest";
import {RequestType} from "../../types/RequestType";
import {FindGameHandler} from "./findGame.handler";
import {MakeMoveHandler} from "./makeMove.handler";

export const messageHandler = (msg: string, ws: WebSocket) => {

    try{
        const data: SocketRequest<any> = parseJson(msg);

        if(! data) {
            throw WSError.Invalid();
        }

        switch (data.type){
            case RequestType.FindGame:
                FindGameHandler(data.data, ws);
                break;
            case RequestType.MakeMove:
                MakeMoveHandler(data.data, ws);
                break;
            case RequestType.SendMessage:

                break;
            case RequestType.SendReaction:

                break;
            default:
                throw WSError.Invalid();
        }

    }
    catch (err: any) {
        ErrorHandlingMiddleware(err, ws)
    }
}