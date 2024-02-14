import {Model, Optional} from 'sequelize';

export interface ShipAttributes{
	id: number;
	coordinate: string;
}

export interface ShipInstance
	extends Model<ShipAttributes, Optional<ShipAttributes, 'id'>>,
		ShipAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}