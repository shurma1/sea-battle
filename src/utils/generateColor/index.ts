import {colors} from './colors';

export const generateColor = () => {
	const a = Math.floor(Math.random() * colors.length -1);
	return '#' + colors[a];
}