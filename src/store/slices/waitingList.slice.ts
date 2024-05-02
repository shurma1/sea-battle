import {createSlice} from '@reduxjs/toolkit';
import {Action} from '../types/Action';
import {PlayerDTO} from '../../dtos/Player';
import {PlayerToGameDto} from "../../dtos/PlayerToGame";


const waitingList = createSlice({
	name: 'WAITING_LIST',
	initialState: [] as PlayerToGameDto[],
	reducers: {
		addPlayerInWaitingList: (state, action: Action<PlayerToGameDto>) => {
			state.push(action.payload);
		},
		removePlayerFromWaitingList: (state, action: Action<string>) => {
			return state.filter(
				player => player.player.id !== action.payload);
		},
	}
});

export default waitingList.reducer;

export const {
	addPlayerInWaitingList,
	removePlayerFromWaitingList
} = waitingList.actions;