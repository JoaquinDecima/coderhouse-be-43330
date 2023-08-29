import express from 'express';
import toysRouter from './routers/toys.router.js';
import userRouter from './routers/user.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/toys', toysRouter);
app.use('/api/users', userRouter);

app.listen(8080, () => console.log('Server started on port 8080'));
