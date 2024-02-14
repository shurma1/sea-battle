import {NextFunction, Request, Response} from 'express';
import {ApiError} from '../error/ApiError';



const errorHandlingMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err);
	if(err instanceof ApiError){
		return res.status(err.status).json({
			message: err.message
		});
	}


	res.status(500).json({
		message: 'Unknown error!'
	});
};

export {
	errorHandlingMiddleware
};