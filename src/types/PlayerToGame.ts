import {Cell} from "./Cell";
import {Player} from "./Player";
import {Ship} from "./GameField";

export interface PlayerToGame {
    player: Player;
    ships: Ship[];
    moves: Cell[];
}