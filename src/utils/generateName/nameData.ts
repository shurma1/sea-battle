import {Gender} from '../../types/Gender';

interface Name {
	icon: string;
	name: string;
	gender: Gender;
}

export const nameData: Name[] = [
	{
		icon: 'walrus',
		name: 'Морж',
		gender: Gender.male
	},
	{
		icon: 'hawk',
		name: 'Ястреб',
		gender: Gender.male
	},
	{
		icon: 'frog',
		name: 'Лягушка',
		gender: Gender.female
	},
	{
		icon: 'crow',
		name: 'ворона',
		gender: Gender.female
	},
	{
		icon: 'hyena',
		name: 'Гиента',
		gender: Gender.female
	},
	{
		icon: 'whale',
		name: 'Кит',
		gender: Gender.male
	},
	{
		icon: 'butterfly',
		name: 'Мотылек',
		gender: Gender.male
	},
	{
		icon: 'bull',
		name: 'Бык',
		gender: Gender.male
	},
	{
		icon: 'turkey',
		name: 'Индейка',
		gender: Gender.female
	},
	{
		icon: 'beetle',
		name: 'Жук',
		gender: Gender.male
	},
	{
		icon: 'crab',
		name: 'Краб',
		gender: Gender.male
	},
	{
		icon: 'cobra',
		name: 'Кобра',
		gender: Gender.female
	},
	{
		icon: 'ship',
		name: 'Овца',
		gender: Gender.female
	}
]