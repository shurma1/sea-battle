import {Model, Optional} from 'sequelize';

export interface MoveAttributes{
	id: number
	coordinate: string;
	isHit: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface MoveInstance
	extends Model<MoveAttributes, Optional<MoveAttributes, 'id'>>,
		MoveAttributes {}