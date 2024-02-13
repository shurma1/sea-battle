import {config} from 'dotenv';
config();

import {Logger} from './utils/logger/logger';
import express, {Application} from 'express';
import router from './routes';
import sequelize from './db';
import cors from 'cors';
import * as models from './models/models';

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(router);

const start = async () => {
	try{
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => Logger.log(`Server started on port: ${PORT}`));
	}
	catch (e){
		Logger.error(e);
		process.exit(1);
	}
};

start();