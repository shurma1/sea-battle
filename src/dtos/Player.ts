import {WebSocket} from 'ws';
import {Player} from "../types/Player";

export class PlayerDTO implements Player{
	public id: string;
	public name: string;
	public avatar: string;
	public primaryColor: string;
	public secondaryColor: string;
	public matchId: null | string;
	public ws: WebSocket;

	constructor(
		ws: WebSocket,
		name: string,
		avatar: string,
		primaryColor: string,
		secondaryColor: string,
		id: string
	) {
		this.ws = ws;
		this.name = name;
		this.avatar = avatar;
		this.primaryColor = primaryColor;
		this.secondaryColor = secondaryColor;
		this.id = id;
		this.matchId = null;
	}

}