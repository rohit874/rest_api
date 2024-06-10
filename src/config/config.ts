import {config as conf} from 'dotenv';

conf();

const _config = {
    port : process.env.PORT,
    databseUrl: process.env.MONGO_CONNECTION_STRING,
};


export const config = Object.freeze(_config);