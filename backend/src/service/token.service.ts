import jwt from 'jsonwebtoken';
import {Token} from '../models/models';
import {ApiError} from '../error/ApiError';


interface IPayload {
	id: number;
}


class TokenService{
	generateTokens(payload: IPayload | object | Buffer){
		const accessToken = jwt.sign(
			payload,
			process.env.JWT_ACCESS_SECRET,
			{
				expiresIn: process.env.JWT_ACCESS_EXPIRES
			});

		const refreshToken = jwt.sign(
			payload,
			process.env.JWT_REFRESH_SECRET,
			{
				expiresIn: process.env.JWT_REFRESH_EXPIRES
			});

		return{
			access_token: accessToken,
			refresh_token: refreshToken
		};
	}

	async saveToken(playerId: number, refreshToken: string) {
		const token = await Token.create({
			token: refreshToken,
			playerId: playerId
		});

		if(! token){
			throw ApiError.badRequest('Something went wrong');
		}

		return token;
	}

	async removeToken(refreshToken: string) {
		const token = await Token.findOne({where: {token: refreshToken}});
		await token.destroy();
	}

	validateAccessToken(token: string){
		try{
			const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET) as IPayload;
			return payload;
		}
		catch {
			return null;
		}
	}

	validateRefreshToken(token: string){
		try{
			const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET) as IPayload;
			const isTokenExists = !!Token.findOne({where: {token}});
			if(! isTokenExists){
				throw new Error('Token not found');
			}
			return payload;
		}
		catch {
			return null;
		}
	}
}

export default new TokenService();