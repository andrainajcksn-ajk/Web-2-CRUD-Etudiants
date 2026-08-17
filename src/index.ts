import 'dotenv/config';
import express from 'express';
import etudiantRoutes from './routes/etudiantRoutes';
import authRoutes from './routes/authRoutes';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/etudiants', etudiantRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur : ${PORT}`));