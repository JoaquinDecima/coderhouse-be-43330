import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', (req, res) => {
	res.json(userController.getUsers());
});

userRouter.post('/', (req, res) => {
	const user = req.body;
	userController.addUser(user);
	res.status(201).json(user);
});

userRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	userController.deleteUser(id);
	res.status(200).json();
});

userRouter.put('/:id', (req, res) => {
	const { id } = req.params;
	const user = req.body;
	userController.updateUser(id, user);
	res.status(200).json(userController.getUsersbyId(id));
});

export default userRouter;
