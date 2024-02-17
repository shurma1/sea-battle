import {Model} from 'sequelize';

export interface TokenCreationAttributes{
	token: string;
	playerId: number;
}
export interface TokenAttributes{
	id:number;
	token: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface TokenInstance
	extends Model<TokenAttributes, TokenCreationAttributes>,
		TokenAttributes {}