import {AnswerType} from "../AnswerType";
import {Player} from "../Player";
import {PlayerDTO} from "../../dtos/Player";

export interface GameFound {
    type: AnswerType.GameFound;
    data: {
        isYourMove: boolean,
        gameId: string,
        enemy: PlayerDTO
    };
}