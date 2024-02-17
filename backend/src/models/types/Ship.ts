import {Model, Optional} from 'sequelize';

export interface ShipAttributes{
	id: number;
	coordinate: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ShipInstance
	extends Model<ShipAttributes, Optional<ShipAttributes, 'id'>>,
		ShipAttributes {}