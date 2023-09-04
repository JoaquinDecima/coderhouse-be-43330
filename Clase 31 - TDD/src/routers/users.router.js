import Router from 'express';
import { generateUser } from '../utils/generate.js';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    const users = [];
    for (let i = 0; i < 200; i++) {
        users.push(generateUser());
    }

    res.json(users);
});

export default userRouter;