import {WebSocket} from 'ws';
import {generateName} from '../utils/generateName';
import {generateColor} from '../utils/generateColor';
import { v4 as uuidv4 } from 'uuid';

export class Player {
	public id: string;
	public name: string;
	public avatar: string;
	public color: string;
	public ws: WebSocket;

	constructor(ws: WebSocket) {
		const {name, icon} = generateName();
		this.ws = ws;
		this.name = name;
		this.avatar = icon;
		this.color = generateColor();
		this.id = uuidv4();
	}

}