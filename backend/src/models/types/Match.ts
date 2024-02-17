import {Model, Optional} from 'sequelize';

export interface MatchAttributes{
	id: number;
	ended?: Date;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface MatchInstance
	extends Model<MatchAttributes, Optional<MatchAttributes, 'id'>>,
		MatchAttributes {}
