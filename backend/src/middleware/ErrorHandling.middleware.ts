import {Request, Response} from 'express';
import {ApiError} from '../error/ApiError';


export default (err: Error | ApiError, req: Request, res: Response) => {
	if(err instanceof ApiError){
		return res.status(err.status).json({
			message: err.message
		});
	}

	res.status(500).json({
		message: 'Unknown error!'
	});
};