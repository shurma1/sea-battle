import {createSlice} from '@reduxjs/toolkit';
import {Action} from '../types/Action';
import {Player} from '../../dtos/Player';


const playerSlice = createSlice({
	name: 'PLAYER',
	initialState: [] as Player[],
	reducers: {
		addPlayer: (state, action: Action<Player> ) => {
			state.push(action.payload);
		},
		removePlayer: (state, action: Action<Pick<Player, 'ws'>>) => {
			return state.filter(player => player.ws!== action.payload.ws);
		},
		updatePlayer: (state, action: Action<Player>) => {
			return state.map(player => {
				if (player.ws === action.payload.ws) {
					return action.payload;
				}
				return player;
			});
		}
	}
});

export default playerSlice.reducer;

export const {
	addPlayer,
	removePlayer,
	updatePlayer
} = playerSlice.actions;