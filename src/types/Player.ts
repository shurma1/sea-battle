import {WebSocket} from "ws";

export interface Player {
    id: string;
    name: string;
    avatar: string;
    color: string;
    ws: WebSocket;
    matchId: null | string;
}