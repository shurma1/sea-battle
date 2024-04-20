import {createSlice} from '@reduxjs/toolkit';
import {Action} from '../types/Action';
import {Player} from '../../dtos/Player';


const waitingList = createSlice({
	name: 'WAITING_LIST',
	initialState: [] as Player[],
	reducers: {
		addPlayerInWaitingList: (state, action: Action<Player>) => {
			state.push(action.payload);
		},
		removePlayerFromWaitingList: (state, action: Action<Pick<Player, 'ws'>>) => {
			return state.filter(
				player => player.ws !== action.payload.ws);
		},
	}
});

export default waitingList.reducer;

export const {
	addPlayerInWaitingList,
	removePlayerFromWaitingList
} = waitingList.actions;