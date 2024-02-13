import sequelize from '../db';
import {DataTypes} from "sequelize";

const Player = sequelize.define('Player', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    mmr: {type: DataTypes.FLOAT, defaultValue: 0.00}
})

const Token = sequelize.define('Token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //created add auto
    token: {type: DataTypes.STRING}
})

const Match = sequelize.define('Match', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //created add auto
    ended: {type: 'TIMESTAMP'}
})

const Move = sequelize.define('Move', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    coordinate: {type: DataTypes.STRING},
    isHit: {type: DataTypes.BOOLEAN}
})


const Participant = sequelize.define('Participant', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    isWin: {type: DataTypes.BOOLEAN}
})

const Ship = sequelize.define('Ship', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    coordinate: {type: DataTypes.STRING},
})

const UserToMatch = sequelize.define('UserToMatch', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


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
}