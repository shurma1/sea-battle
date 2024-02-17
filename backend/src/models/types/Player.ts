import {Optional, Model} from 'sequelize';

export interface PlayerAttributes{
	id:number;
	email: string;
	password: string;
	mmr: number;
	createdAt?: Date;
	updatedAt?: Date;
}


export interface PlayerInstance
	extends Model<PlayerAttributes, Optional<PlayerAttributes, 'id'>>,
		PlayerAttributes {}

