import { Router } from 'express';
import { userService } from '../services/UserService.js';

const userRouter = Router();

userRouter.post('/', (req, res) => {
	userService.addUser(req.body);
	res.status(201).send();
});

export default userRouter;
