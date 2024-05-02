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
		gender: Gender.Male
	},
	{
		icon: 'hawk',
		name: 'Ястреб',
		gender: Gender.Male
	},
	{
		icon: 'frog',
		name: 'Лягушка',
		gender: Gender.Female
	},
	{
		icon: 'crow',
		name: 'ворона',
		gender: Gender.Female
	},
	{
		icon: 'hyena',
		name: 'Гиента',
		gender: Gender.Female
	},
	{
		icon: 'whale',
		name: 'Кит',
		gender: Gender.Male
	},
	{
		icon: 'butterfly',
		name: 'Мотылек',
		gender: Gender.Male
	},
	{
		icon: 'bull',
		name: 'Бык',
		gender: Gender.Male
	},
	{
		icon: 'turkey',
		name: 'Индейка',
		gender: Gender.Female
	},
	{
		icon: 'beetle',
		name: 'Жук',
		gender: Gender.Male
	},
	{
		icon: 'crab',
		name: 'Краб',
		gender: Gender.Male
	},
	{
		icon: 'cobra',
		name: 'Кобра',
		gender: Gender.Female
	},
	{
		icon: 'dragon',
		name: 'Дракон',
		gender: Gender.Male
	},
	{
		icon: 'deer',
		name: 'Олень',
		gender: Gender.Male
	},
	{
		icon: 'cock',
		name: 'Петух',
		gender: Gender.Male
	}
]