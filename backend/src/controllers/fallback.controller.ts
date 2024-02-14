import {Request, Response} from 'express';

export const fallbackController = (req: Request, res: Response) => {
	res.status(404).json({
		message: 'Not found :/'
	});
};