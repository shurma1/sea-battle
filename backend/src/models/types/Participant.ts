import {Model, Optional} from 'sequelize';

export interface ParticipantAttributes{
	id: number;
	isWin: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ParticipantInstance
	extends Model<ParticipantAttributes, Optional<ParticipantAttributes, 'id'>>,
		ParticipantAttributes {}