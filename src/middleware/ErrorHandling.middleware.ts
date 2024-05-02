import {WebSocket} from "ws";
import {AnswerDto} from "../dtos/Answer";
import {AnswerStatus} from "../types/AnswerStatus";

export const ErrorHandlingMiddleware = (error: Error, ws?: WebSocket) => {

    if(!ws) {
        return;
    }
    const answer = new AnswerDto(AnswerStatus.Error, error.message)
    ws.send(JSON.stringify(answer));
}