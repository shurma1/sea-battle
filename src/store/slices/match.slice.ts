import {createSlice} from '@reduxjs/toolkit';
import {Action} from '../types/Action';
import {GameDTO} from "../../dtos/Game";



const matchSlice = createSlice({
	name: 'MATCH',
	initialState: [] as GameDTO[],
	reducers: {
		addMatch: (state, action: Action<GameDTO>) => {
			state.push(action.payload);
		},
		removeMatch: (state, action: Action<string>) => {
			return state.filter(
				match => match.id !== action.payload);
		},
		updateMatch: (state, action: Action<GameDTO>) => {
			return state.map(match => {
				if (match.id === action.payload.id) {
					return action.payload;
				}
				return match;
			});
		}
	}
});

export default matchSlice.reducer;

export const {
	addMatch,
	removeMatch,
	updateMatch
} = matchSlice.actions;