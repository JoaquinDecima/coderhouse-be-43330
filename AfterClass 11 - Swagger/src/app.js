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
const PORT = process.env.PORT||8081;
const connection = mongoose.connect(
  `mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority`
);
const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Adoptapet API",
      version: "1.0.1",
      description: "Adoptapet API Information for CoderHouse",
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
      {
        url: "https://api.uat.adoptme.com",
      },
      {
        url: "https://api.prepro.adoptme.com",
      },
      {
        url: "https://api.adoptme.com",
      }
    ],
  },
  apis: ["./src/routes/*.js"],
};
const spects = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());

app.use('/docs',swaggerUi.serve,swaggerUi.setup(spects));
app.use('/swagger.json', (req,res)=>{
  res.setHeader('Content-Type','application/json');
  res.send(spects);
});
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
