import { Router } from 'express';
import userService from '../service/user.service.js';

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
	try {
		const users = await userService.getAll();
		res.send(users);
	} catch (err) {
		res.status(500).send({ err });
	}
});

usersRouter.post('/', async (req, res) => {
	try {
		const user = await userService.addUser(req.body);
		res.status(201).send(user);
	} catch (err) {
		res.status(500).send({ err });
	}
});

usersRouter.put('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		const user = await userService.updateUser(uid, req.body);
		res.status(201).send(user);
	} catch (err) {
		res.status(500).send({ err });
	}
});

usersRouter.delete('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		await userService.deleteUser(uid);
		res.sendStatus(204);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default usersRouter;
