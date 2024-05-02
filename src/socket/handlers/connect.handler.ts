import {WebSocket} from "ws";
import {Request} from "express";
import playerService from "../../services/player.service";
import {AnswerType} from "../../types/AnswerType";
import {UserCreated} from "../../types/Answers/UserCreated";

export const connectHandler = (ws: WebSocket, req: Request) => {

    const player = playerService.create(ws);

    const answer: UserCreated = {
        type: AnswerType.UserCreated,
        data: playerService.getCleared(player.id)
    }

    ws.send(JSON.stringify(answer));
}