import express from 'express';
import 'dotenv/config';
import process from 'process';

import { PostgresHelper } from './src/db/postgres/helper.js';

const app = express();

app.get('/', async (req, res) => {
    const result = await PostgresHelper.query('SELECT * FROM users', []);
    res.send(result.rows);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
