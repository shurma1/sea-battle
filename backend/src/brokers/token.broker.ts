import {Token} from '../models/models';
import {Op} from'sequelize';
import ms from 'ms';

const BROKER_DURATION = 30 * 60 * 1000;

export const tokenBroker = async () => {
	// eslint-disable-next-line no-constant-condition
	while(true) {
		const originalDate = new Date();
		const tokenLiveTime = ms(process.env.JWT_REFRESH_EXPIRES);
		const date = new Date(originalDate.getTime() - tokenLiveTime);

		await Token.destroy({
			where: {
				createdAt: {
					[Op.lt]: date,
				},
			}
		});
		await new Promise(resolve => setTimeout(resolve, BROKER_DURATION));
	}
};