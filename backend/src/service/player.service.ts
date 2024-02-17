import validator from 'validator';
import {ApiError} from '../error/ApiError';
import {Participant, Match, Player} from '../models/models';
import bcrypt from 'bcrypt';
class PlayerService {
	async registration(email: any, password: any){

		if(
			typeof email !== 'string'
			|| !validator.isEmail(email)
		) {
			throw ApiError.badRequest('Email is invalid');
		}

		if(!password || password.length <= 8) {
			throw ApiError.badRequest('Password must contain at least 8 characters');
		}

		const isPlayerExist = !! await Player.findOne({
			where: {
				email: email
			}
		});

		if (isPlayerExist) {
			throw ApiError.conflict('User with this email already exists');
		}

		const hashPassword = await bcrypt.hash(password, 10);

		const player =  await Player.create({
			email,
			password: hashPassword
		});

		return player;

	}

	async login(email: any, password: any){
		if(!email) {
			throw ApiError.badRequest('Email is empty');
		}
		if(!password || password.length <= 8) {
			throw ApiError.badRequest('Password must contain at least 8 characters');
		}

		const player = await Player.findOne({
			where: {
				email
			}
		});

		const isPassEquals = bcrypt.compare(password, player.password);

		if(! player || ! isPassEquals){
			throw ApiError.badRequest('Account is not defined');
		}

		return player;
	}

	async get(id: any){
		console.log(id, !id);
		if(! id) {
			throw ApiError.badRequest('Required parameter \'id\' is not specified');
		}


		const isNumber = validator.isNumeric(id.toString());
		console.log(isNumber);
		if(! isNumber) {
			throw ApiError.badRequest('ID must be a number');
		}

		const player = await Player.findByPk(id, {
			include: [
				{
					model: Match,
					include: [Participant]
				}
			]

		});

		if(! player) {
			throw ApiError.badRequest('Player with this ID does not exist');
		}

		return player;
	}
}

export default new PlayerService();