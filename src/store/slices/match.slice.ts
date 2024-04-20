import {createSlice} from '@reduxjs/toolkit';
import {Action} from '../types/Action';
import {Player} from '../../dtos/Player';
import {Cell} from '../../dtos/Cell';
import {Ship} from '../../dtos/Ship';


interface IPlayers extends Player{
	timerId: NodeJS.Timeout | undefined;
	filed: Cell[];
	ships: Ship[];
	player: Player;
}

interface IMatch {
	id: string;
	firstPlayer: IPlayers;
	secondPlayer: IPlayers;
}

const matchSlice = createSlice({
	name: 'MATCH',
	initialState: [] as IMatch[],
	reducers: {
		addMatch: (state, action: Action<IMatch>) => {
			state.push(action.payload);
		},
		removeMatch: (state, action: Action<Pick<IMatch, 'id'>>) => {
			return state.filter(
				match => match.id !== action.payload.id);
		},
		updateMatch: (state, action: Action<IMatch>) => {
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