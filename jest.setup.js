import 'whatwg-fetch';
import 'setimmediate';
import { getEnviroments } from './src/helpers/getEnviroments';

require('dotenv').config({
	path: '.env.test',
});

jest.mock('./src/helpers/getEnviroments', () => ({
	getEnviroments: () => ({ ...process.env }),
}));
