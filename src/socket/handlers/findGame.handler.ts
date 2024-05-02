import {WebSocket} from "ws";
import playerService from "../../services/player.service";
import WSError from "../../error/WSError";
import gameFieldService from "../../services/gameField.service";
import GameService from "../../services/game.service";
import {PlayerToGameDto} from "../../dtos/PlayerToGame";
import {CellDTO} from "../../dtos/Cell";
import {AnswerType} from "../../types/AnswerType";

export const FindGameHandler = (data: CellDTO[][], ws: WebSocket) => {
    const player = playerService.getByWS(ws);

    const isFieldValid = gameFieldService.verify(data);

    if(!isFieldValid) {
        throw WSError.Invalid();
    }

    GameService.findGame(
        new PlayerToGameDto(
            player,
            data,
            []
        )
    ).then(game => {
        if(! game) {
            return;
        }

        const [firstPlayer, secondPlayer] = game.players;

        firstPlayer.player.ws.send(
            JSON.stringify({
                type: AnswerType.GameFound,
                data: {
                    isYourMove: true,
                    gameId: game.id,
                    enemy: secondPlayer.player
                }
            })
        )

        secondPlayer.player.ws.send(
            JSON.stringify({
                type: AnswerType.GameFound,
                data: {
                    isYourMove: false,
                    gameId: game.id,
                    enemy: firstPlayer.player
                }
            })
        )
    })
}
