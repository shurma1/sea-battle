import {Request, Response, NextFunction} from 'express';
import PlayerService from '../service/player.service';
import TokenService from '../service/token.service';

class PlayerController{
	async registration(req: Request, res: Response, next: NextFunction){
		try {
			const {email, password} = req.body;

			const player = await PlayerService.registration(email, password);
			const token = TokenService.generateTokens({id: player.id});
			const savesToken = await TokenService.saveToken(player.id, token.refreshToken);

			return res.json({
				id: player.id,
				email: player.email,
				tokens: savesToken
			});
		}
		catch (e) {
			next(e);
		}
	}

	async login(req: Request, res: Response){

	}

}

export default new PlayerController();