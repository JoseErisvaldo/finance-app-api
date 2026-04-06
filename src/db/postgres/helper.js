import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const { Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '../../../.env'),
});

export const pool = new Pool({
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
});

export const PostgresHelper = {
    query: async (query, params) => {
        const client = await pool.connect();
        try {
            const res = await client.query(query, params);
            return res;
        } finally {
            client.release();
        }
    },
};
