import {PlayerToGame} from "../types/PlayerToGame";

export class GameDTO{
    public id: string;
    public moverId: number;
    public players: PlayerToGame[];

    constructor(id: string, moverId: number, players: PlayerToGame[]) {
        this.id = id;
        this.moverId = moverId;
        this.players = players;
    }

}