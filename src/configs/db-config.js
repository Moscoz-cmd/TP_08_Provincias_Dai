import 'dotenv/config';
import pkg from 'pg';

const { Client } = pkg;

const DBConfig = {
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:     process.env.DB_PORT,
};

export { Client, DBConfig };
