import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(
  `mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority`
);
const swaggerOptions = {
  definition:{
    openapi:'3.0.1',
    info:{
      title:'Adoptapet API',
      version:'1.0.0',
      description:'Adoptapet API Information for CoderHouse',
    }
  },
  apis:['./docs/**/*.yaml']
}
const spects = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());

app.use('/docs',swaggerUi.serve,swaggerUi.setup(spects));
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
