import MyRouter from './Router.js';
import jwt from 'jsonwebtoken';

export default class UserRouter extends MyRouter {
	init() {
		this.post('/login', ['PUBLIC'], (req, res) => {
			const user = req.body;

			const token = jwt.sign(user, 'secret');
			res.status(200).send({ token });
		});

		this.get('/me', ['USER', 'ADMIN'], (req, res) => {
			res.status(200).send({ user: req.user });
		});

		this.get('/admin', ['ADMIN'], (req, res) => {
			res.status(200).send({ user: req.user });
		});
	}
}
