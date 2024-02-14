import {Model, Optional} from 'sequelize';

export interface MatchAttributes{
	id: number;
	ended?: Date;
}

export interface MatchInstance
	extends Model<MatchAttributes, Optional<MatchAttributes, 'id'>>,
		MatchAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}
