import bcrypt from 'bcrypt';
import Router from 'express';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service.js';

const userRouter = new Router();

userRouter.get('/', async (req, res) => {
	try {
		const users = await userService.getAll();
		res.json(users);
	} catch (err) {
		res.redirect('/error');
	}
});

userRouter.post('/', async (req, res) => {
	const user = req.body;
	try {
		const newUser = await userService.create(user);
		res.status(201).json(newUser);
	} catch (err) {
		res.redirect('/error');
	}
});

userRouter.post('/login', async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userService.getByEmail(email);
		if (!user) {
			return res.redirect('/404');
		}

		if (!bcrypt.compareSync(password, user.password)) {
			return res.redirect('/404');
		}

		const token = jwt.sign({ user }, 'privatekey', { expiresIn: '1h' });

		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 6000000,
		}).redirect('/');
	} catch (err) {
		console.log(err);
		res.redirect('/error');
	}
});

export default userRouter;
