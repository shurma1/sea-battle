import {PlayerToGame} from "../types/PlayerToGame";
import {PlayerDTO} from "./Player";
import {CellDTO} from "./Cell";


export class PlayerToGameDto implements PlayerToGame {
    public player: PlayerDTO;
    public ships: CellDTO[][];
    public moves: CellDTO[];

    constructor(player: PlayerDTO, ships: CellDTO[][], moves: CellDTO[]) {
        this.player = player;
        this.ships = ships;
        this.moves = moves;
    }
}