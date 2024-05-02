import {WebSocket} from "ws";
import {Cell} from "../../types/Cell";
import PlayerService from "../../services/player.service";
import GameService from "../../services/game.service";
import WSError from "../../error/WSError";
import {AnswerType} from "../../types/AnswerType";
import {updatePlayer} from "../../store/slices/player.slice";
import {generateEffect} from "../../utils/generateEffect";

export const MakeMoveHandler = (hit: Cell, ws: WebSocket) => {
    const player = PlayerService.getByWS(ws);
    const gameId = player.matchId;

    if(!gameId) {
        throw WSError.Invalid();
    }

    const game = GameService.getGame(gameId);

    const enemy = game.players[0].player.id === player.id
        ? game.players[0]
        : game.players[1]

    let isShot = false;

    let isEnd = true;

    for(let i = 0; i< enemy.ships.length; i++) {
        for(let j = 0; j< enemy.ships[i].length; j++) {
            const cell = enemy.ships[i][j];
            if(
                hit.y === cell.y
                && hit.x === cell.x
            ){
                cell.hit = true;
                cell.shot = true;

                isShot = true;
            }

            if(!cell.shot) {
                isEnd = false;
            }
        }
    }

    [player, enemy.player].forEach((playerData, i) => {
        playerData.ws.send(
            JSON.stringify({
                type: AnswerType.Move,
                data: {
                    owner: player.id,
                    isYourMove: i === 0 ? isShot : ! isShot ,
                    isShot,
                    cell: hit
                }
            })
        )
    })

    if(isEnd) {
        const effect = generateEffect();
        [player, enemy.player].forEach((playerData, i) => {
            playerData.ws.send(
                JSON.stringify({
                    type: AnswerType.GameEnded,
                    effect,
                    data: {
                        win: playerData === player,
                    }
                })
            )

            GameService.endGame(game);
        })
        return;
    }
}