import express from 'express';
import StudentRouter from './routes/student.routes.js';


const app = express();

app.use(express.json());

app.use('/students', StudentRouter);

export {app};