import sequelize from '../db';
import {DataTypes} from 'sequelize';
import {PlayerInstance} from './types/Player';
import {TokenInstance} from './types/Token';
import {MatchInstance} from './types/Match';
import {MoveInstance} from './types/Move';
import {ParticipantInstance} from './types/Participant';
import {ShipInstance} from './types/Ship';



const Player = sequelize.define<PlayerInstance>('player', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, unique: true},
	password: {type: DataTypes.STRING},
	mmr: {type: DataTypes.FLOAT, defaultValue: 0.00}
});

const Token = sequelize.define<TokenInstance>('token', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	//created add auto
	token: {type: DataTypes.STRING}
});

const Match = sequelize.define<MatchInstance>('match', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	//created add auto
	ended: {type: 'TIMESTAMP'}
});


const Move = sequelize.define<MoveInstance>('move', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	coordinate: {type: DataTypes.STRING},
	isHit: {type: DataTypes.BOOLEAN}
});


const Participant = sequelize.define<ParticipantInstance>('participant', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	isWin: {type: DataTypes.BOOLEAN}
});

const Ship = sequelize.define<ShipInstance>('ship', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	coordinate: {type: DataTypes.STRING},
});

const UserToMatch = sequelize.define('user_to_match', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


Player.hasMany(Token);
Token.belongsTo(Player);

Match.hasMany(Move);
Move.belongsTo(Match);

Match.hasMany(Participant);
Participant.belongsTo(Match);

Participant.hasMany(Ship);
Ship.belongsTo(Participant);

Player.belongsToMany(Match, {through: UserToMatch});
Match.belongsToMany(Player, {through: UserToMatch});

export {
	Player,
	Token,
	Match,
	Move,
	Ship,
	Participant,
	UserToMatch
};