import {WebSocket} from "ws";
import {PlayerDTO} from "../dtos/Player";
import {generateName} from "../utils/generateName";
import {generateColor} from "../utils/generateColor";
import {v4 as uuidv4} from "uuid";
import {addPlayer, removePlayer} from "../store/slices/player.slice";
import { store } from "../store/store";
import WSError from "../error/WSError";


class PlayerService {

    public create(ws: WebSocket) {
        const player = this.createPlayer(ws);
        store.dispatch(
            addPlayer(player)
        );
        return player;
    }

    public getCleared(id: string) {
        const player = this.get(id);

        return {
            id: player.id,
            avatar: player.avatar,
            name: player.name,
            color: player.color,
            matchId: player.matchId
        }
    }

    public remove(id: string) {
        const player = this.get(id);

        store.dispatch(
            removePlayer(player)
        );
    }

    public get(id: string){
        const players = store.getState().players;
        const player = players.find(player=>player.id === id);

        if(!player) {
            throw WSError.NotFound();
        }
        return player;
    }

    public getByWS(ws: WebSocket){
        const players = store.getState().players;
        const player = players.find(player=>player.ws === ws);

        if(!player) {
            throw WSError.NotFound();
        }
        return player;
    }

    private createPlayer(ws: WebSocket) {
        const {name, icon} = generateName();
        return new PlayerDTO(
            ws,
            name,
            icon,
            generateColor(),
            uuidv4()
        );
    }

}

export default new PlayerService();