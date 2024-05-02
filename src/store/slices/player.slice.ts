import {createSlice} from '@reduxjs/toolkit';
import {Action} from '../types/Action';
import {PlayerDTO} from '../../dtos/Player';


const playerSlice = createSlice({
	name: 'PLAYER',
	initialState: [] as PlayerDTO[],
	reducers: {
		addPlayer: (state, action: Action<PlayerDTO> ) => {
			state.push(action.payload);
		},
		removePlayer: (state, action: Action<Pick<PlayerDTO, 'ws'>>) => {
			return state.filter(player => player.ws!== action.payload.ws);
		},
		updatePlayer: (state, action: Action<PlayerDTO>) => {
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