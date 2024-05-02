import {AnswerType} from "../AnswerType";
import {Player} from "../Player";

export interface UserCreated {
    type: AnswerType.UserCreated;
    data: Omit<Player, 'ws'>;
}