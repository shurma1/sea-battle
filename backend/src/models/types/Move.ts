import {Model, Optional} from 'sequelize';

export interface MoveAttributes{
	id: number
	coordinate: string;
	isHit: boolean;
}

export interface MoveInstance
	extends Model<MoveAttributes, Optional<MoveAttributes, 'id'>>,
		MoveAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}