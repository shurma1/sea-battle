import {WSErrors} from "../types/WSErrors";


export default class WSError extends Error {

    constructor(message: WSErrors) {
        super();
        this.message = message;
    }

    static NotFound(){
        return new WSError(WSErrors.NOT_FOUND);
    }

    static Invalid(){
        return new WSError(WSErrors.INVALID);
    }
}