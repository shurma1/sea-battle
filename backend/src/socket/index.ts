import { WebSocket } from 'ws';
import {Request} from 'express';
import {store} from '../store';
import {addPlayer, removePlayer} from '../store/slices/player.slice';
import TokenService from '../service/token.service';
import PlayerService from '../service/player.service';
import {isJSON} from '../utils/isJSON';

export default async(ws: WebSocket, req: Request) => {
	const token = req.query.token;

	const tokenPayload = TokenService.validateAccessToken(token as string);

	if(! tokenPayload) {
		ws.send(JSON.stringify({
			code: 401,
			message: 'Not authorized'
		}));
		ws.close();
		return;
	}

	const playerId = tokenPayload.id;
	const player = await PlayerService.get(playerId);

	const connPlayers = store.getState().players;
	const isAlreadyConnected = connPlayers.some(player => player.id === playerId);

	if(isAlreadyConnected) {
		ws.send(JSON.stringify({
			code: 403,
			message: 'This account is already connected to another device'
		}));
		ws.close();
		return;
	}

	store.dispatch(addPlayer({
		ws: ws,
		id: playerId,
		mmr: player.mmr,
		inSearch: false
	}));

	ws.on('message', (message: string) => {

		if(! isJSON(message)) {
			ws.send(JSON.stringify({
				code: 400,
				message: 'Wrong data. The message must be in JSON format.'
			}));
			return;
		}

		const messageType = JSON.parse(message).type;

		if(! messageType) {
			ws;
			ws.send(JSON.stringify({
				code: 400,
				message: 'Wrong data. The message must have a type field.'
			}));
			return;
		}

		switch (messageType) {

		case 'test':
			ws.send('ok');
			break;

		default:
			ws.send('not ok');
		}
	});

	ws.on('close', () => {
		store.dispatch(removePlayer({
			id: playerId
		}));
	});
};