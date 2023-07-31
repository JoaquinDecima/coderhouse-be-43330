import express from 'express';
import userRouter from './routers/users.router.js';

const app = express();

app.use("/users", userRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
});