import {WebSocket} from "ws";


export const closeHandler = (ws: WebSocket) => {
    console.log('close');
}