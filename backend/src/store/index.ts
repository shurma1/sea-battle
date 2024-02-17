import {configureStore} from '@reduxjs/toolkit';
import playerReducer from './slices/player.slice';

export const store = configureStore({
	reducer: {
		players: playerReducer
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