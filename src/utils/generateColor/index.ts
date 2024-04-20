import {colors} from './colors';

export const generateColor = () => {
	const a = Math.floor(Math.random() * colors.length);
	return '#' + colors[a];
}