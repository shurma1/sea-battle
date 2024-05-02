import {WebSocket} from 'ws';
import {Player} from "../types/Player";

export class PlayerDTO implements Player{
	public id: string;
	public name: string;
	public avatar: string;
	public color: string;
	public matchId: null | string;
	public ws: WebSocket;

	constructor(
		ws: WebSocket,
		name: string,
		avatar: string,
		color: string,
		id: string
	) {
		this.ws = ws;
		this.name = name;
		this.avatar = avatar;
		this.color = color;
		this.id = id;
		this.matchId = null;
	}

}