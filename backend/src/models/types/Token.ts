import {Model} from 'sequelize';

export interface TokenCreationAttributes{
	token: string;
	PlayerId: number;
}
export interface TokenAttributes{
	id:number;
	token: string;
}

export interface TokenInstance
	extends Model<TokenAttributes, TokenCreationAttributes>,
		TokenAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}