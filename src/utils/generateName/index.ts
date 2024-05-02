import {descriptionData} from './descriptionData';
import {nameData} from './nameData';
import {Gender} from '../../types/Gender';


export const generateName = () => {
	const a = Math.floor(Math.random() * nameData.length-1);
	const b = Math.floor(Math.random() * descriptionData.length-1);
	const {
		icon,
		name,
		gender
	} = nameData[a];

	const genderId = gender === Gender.Male ? 0 : 1;
	const description = descriptionData[b][genderId];

	return {
		name: description + ' ' + name,
		icon
	}
}