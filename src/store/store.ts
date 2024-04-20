import {configureStore} from '@reduxjs/toolkit';
import playersReducer from './slices/player.slice';
import matchesReducer from './slices/match.slice';

export const store = configureStore({
	reducer: {
		players: playersReducer,
		matches: matchesReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['PLAYER/addPlayer'],
				ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
				ignoredPaths: ['items.dates'],
			}
		})
});