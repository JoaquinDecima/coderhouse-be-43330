import { Router } from 'express';
import UserDAO from '../dao/userDAO.js';

const usersRouter = Router();
const userDAO = new UserDAO();

usersRouter.get('/', async (req, res) => {
	try {
		const users = await userDAO.getAll();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export { usersRouter, usersRouter as default };
