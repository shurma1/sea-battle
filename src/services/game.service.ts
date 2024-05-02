import {store} from "../store/store";
import {addPlayerInWaitingList, removePlayerFromWaitingList} from "../store/slices/waitingList.slice";
import {GameDTO} from "../dtos/Game";
import {v4 as uuidv4} from "uuid";
import {PlayerToGameDto} from "../dtos/PlayerToGame";
import {addMatch, removeMatch} from "../store/slices/match.slice";
import {updatePlayer} from "../store/slices/player.slice";
import WSError from "../error/WSError";

class GameService {

    async findGame(player: PlayerToGameDto) {
        const waitingList = store.getState().waitingList;

        if(waitingList.length) {

            const enemy = waitingList[waitingList.length - 1];

            store.dispatch(
                removePlayerFromWaitingList(enemy.player.id)
            );

            return this.createGame(
                player,
                enemy
            );

        }

        store.dispatch(
            addPlayerInWaitingList(player)
        );

        return false;
    }

    createGame(firstPlayer: PlayerToGameDto, secondPlayer: PlayerToGameDto) {
        const game = new GameDTO(
            uuidv4(),
            0,
            [
                firstPlayer,
                secondPlayer
            ]
        )

        store.dispatch(
            addMatch(game),
            updatePlayer({
                ...firstPlayer.player,
                matchId: game.id
            }),
            updatePlayer({
                ...secondPlayer.player,
                matchId: game.id
            })
        )

        return game;
    }

    endGame(gameDTO: GameDTO) {
        store.dispatch(
            updatePlayer({
                ...gameDTO.players[0].player,
                matchId: null
            }),
            updatePlayer({
                ...gameDTO.players[1].player,
                matchId: null
            }),
            removeMatch(gameDTO.id)
        );
    }

    getGame(gameId: string){
        const games = store.getState().matches;

        const game = games.find(game=>game.id === gameId);

        if(!game) {
            throw WSError.NotFound();
        }

        return game;
    }

}


export default new GameService();