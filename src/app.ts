import express, { Express } from 'express';
import 'dotenv/config';
import { connectDB } from './utils/connect';
import csvRouter from './routes/csvRoute';

const app: Express = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use('/api', csvRouter);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
