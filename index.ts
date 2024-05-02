import express from 'express';
import config from 'config';
import http from 'http';
import https from 'https';
import expressWs from 'express-ws';
import {socket} from "./src/socket";
import Router from "./src/routes";
import path from "node:path";

export const ROOT_DIR = path.resolve(__dirname);

const expressApp = express();

const {app} = expressWs(expressApp);

app.use(express.json());

app.use('/', Router)

app.ws('/', socket);


const PORT = config.get('server.PORT') as number || 3000;
const HOST = config.get('server.HOST') as string;
const SECURE = config.get('server.SECURE') as boolean;
const isDev = config.get('isDev') as boolean;


app.listen(
	PORT,
	() => {
		console.log(`start http://localhost:${PORT}`);
	}
)