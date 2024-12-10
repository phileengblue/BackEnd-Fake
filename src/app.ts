import express from 'express';
import apiRouter from './router/api';

const app = express();

app.use(express.json());

// Rotte API
app.use('/api', apiRouter);

export default app;
