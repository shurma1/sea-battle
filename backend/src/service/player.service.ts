import validator from 'validator';
import {ApiError} from '../error/ApiError';
import {Player} from '../models/models';
import bcrypt from 'bcrypt';
class PlayerController {
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

		console.log(hashPassword);
		const data =  await Player.create({
			email,
			password: hashPassword
		});

		return data;

	}
}

export default new PlayerController();