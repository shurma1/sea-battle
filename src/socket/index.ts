import {WebSocket} from "ws";
import {Request} from "express";
import {messageHandler} from "./handlers/message.handler";
import {connectHandler} from "./handlers/connect.handler";
import {closeHandler} from "./handlers/close.handler";

export const socket = (ws: WebSocket, req: Request) => {
    connectHandler(ws, req);
    ws.on("message", (msg: string) => messageHandler(msg, ws))
    ws.on('close', () => closeHandler(ws))
}