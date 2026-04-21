import express from 'express';
import machineRoutes from './routes/machineRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/machines', machineRoutes);

app.get('/', (req, res) => {
    res.send('API Produccion');
});

export default app;