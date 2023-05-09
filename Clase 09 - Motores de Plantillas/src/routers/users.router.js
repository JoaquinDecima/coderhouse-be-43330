import { Router } from 'express';
import { userController } from '../controllers/UserController.js';

const userRouter = Router();

userRouter.post('/', (req, res) => {
	userController.addUser(req.body);
	res.status(201).send();
});

export default userRouter;
