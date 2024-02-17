import {config} from 'dotenv';
config();

import {Logger} from './utils/logger/logger';
import express, {Application} from 'express';
import expressWs from 'express-ws';
import router from './routes';
import sequelize from './db';
import cors from 'cors';
import {errorHandlingMiddleware} from './middleware/ErrorHandling.middleware';
import {fallbackController} from './controllers';
import websocketController from './socket';
import brokers from './brokers';

const PORT = process.env.PORT || 8000;

const expressApp: Application = express();
const {app} = expressWs(expressApp);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.ws('/ws', websocketController);
app.use(router);
app.use(fallbackController);
app.use(errorHandlingMiddleware);

const start = async () => {
	try{
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => Logger.log(`Server started on port: ${PORT}`));

		brokers();
	}
	catch (e){
		Logger.error(e);
		process.exit(1);
	}
};

start();