import {Optional, Model} from 'sequelize';

export interface PlayerAttributes{
	id:number;
	email: string;
	password: string;
	mmr?: number;
}


export interface PlayerInstance
	extends Model<PlayerAttributes, Optional<PlayerAttributes, 'id'>>,
		PlayerAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

