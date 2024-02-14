import jwt from 'jsonwebtoken';
import {Token} from '../models/models';
class TokenService{
	generateTokens(payload: string | object | Buffer){
		const accessToken = jwt.sign(
			payload,
			process.env.JWT_ACCESS_SECRET,
			{
				expiresIn: '1h'
			});

		const refreshToken = jwt.sign(
			payload,
			process.env.JWT_REFRESH_SECRET,
			{
				expiresIn: '30d'
			});

		return{
			accessToken,
			refreshToken
		};
	}

	async saveToken(playerId: number, refreshToken: string) {
		const token = await Token.create({
			token: refreshToken,
			PlayerId: playerId
		});
		return token;
	}

	async removeToken(refreshToken: string) {
		const token = await Token.findOne({where: {token: refreshToken}});
		await token.destroy();
	}

	validateAccessToken(token: string){
		try{
			const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
			return payload;
		}
		catch {
			return null;
		}
	}

	validateRefreshToken(token: string){
		try{
			const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
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