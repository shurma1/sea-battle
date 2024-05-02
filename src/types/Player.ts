import {WebSocket} from "ws";

export interface Player {
    id: string;
    name: string;
    avatar: string;
    primaryColor: string;
    secondaryColor: string;
    ws: WebSocket;
    matchId: null | string;
}