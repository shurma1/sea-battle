import express from 'express';
import config from 'config';
import http from 'http';
import https from 'https';


const app = express();


const PORT = config.get('server.PORT') as number || 3000;
const HOST = config.get('server.HOST') as string;
const SECURE = config.get('server.SECURE') as boolean;
const isDev = config.get('isDev') as boolean;


app.listen(
	PORT,
	() => {
		console.log('start')
	}
)