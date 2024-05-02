import {AnswerStatus} from "../types/AnswerStatus";

export class AnswerDto<T> {

    success: AnswerStatus;
    type: string;
    data?: T;

    constructor(success: AnswerStatus, type: string, data?: T) {
        this.success = success;
        this.type = type;
        this.data = data;
    }

}