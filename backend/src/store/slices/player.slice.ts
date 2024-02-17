import {createSlice} from '@reduxjs/toolkit';
import {WebSocket} from 'ws';

interface IState {
	ws: WebSocket;
	id: number;
	mmr: number;
	inSearch: boolean;
}


const playerSlice = createSlice({
	name: 'PLAYER',
	initialState: [] as IState[],
	reducers: {
		addPlayer: (state, action) => {
			state.push(action.payload);
		},
		removePlayer: (state, action) => {
			return state.filter(player => player.id!== action.payload.id);
		}
	}
});

export default playerSlice.reducer;

export const {addPlayer, removePlayer} = playerSlice.actions;