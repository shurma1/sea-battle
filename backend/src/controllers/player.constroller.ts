import {Request, Response, NextFunction} from 'express';
import PlayerService from '../service/player.service';
import TokenService from '../service/token.service';

class PlayerController{
	async registration(req: Request, res: Response, next: NextFunction){
		try {
			const {email, password} = req.body;

			const player = await PlayerService.registration(email, password);
			const tokens = TokenService.generateTokens({id: player.id});
			await TokenService.saveToken(player.id, tokens.refresh_token);

			return res.json({
				id: player.id,
				email: player.email,
				...tokens
			});
		}
		catch (e) {
			next(e);
		}
	}

	async login(req: Request, res: Response, next: NextFunction){
		try{
			const {email, password} = req.body;

			const player = await PlayerService.login(email, password);
			const tokens = TokenService.generateTokens({id: player.id});
			await TokenService.saveToken(player.id, tokens.refresh_token);

			return res.json({
				id: player.id,
				email: player.email,
				...tokens
			});
		}
		catch (e) {
			next(e);
		}
	}

	async get(req: Request, res: Response, next: NextFunction){
		try{
			const {id} = req.params;
			const player = await PlayerService.get(id);

			res.json(player);
		}
		catch (e) {
			next(e);
		}
	}

}

export default new PlayerController();