import {Model, Optional} from 'sequelize';

export interface ParticipantAttributes{
	id: number;
	isWin: boolean;
}

export interface ParticipantInstance
	extends Model<ParticipantAttributes, Optional<ParticipantAttributes, 'id'>>,
		ParticipantAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}