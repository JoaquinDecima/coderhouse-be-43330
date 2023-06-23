import { Router } from 'express';
import passport from 'passport';
import userService from '../services/user.service.js';
import { hashPassword, comparePassword } from '../utils/encript.util.js';

const usersRouter = Router();

usersRouter.post(
	'/',
	passport.authenticate('register', { failureRedirect: '/registererror' }),
	async (req, res) => {
		res.redirect('/');
	}
);

usersRouter.post(
	'/auth',
	passport.authenticate('login', { failureRedirect: '/loginerror' }),
	async (req, res) => {
		// Verificamos que el usuario exista
		if (!req.user) return res.status(400).send('No user found');

		// Saco la contraseña y lo guardo en la sesion
		const user = req.user;
		delete user.password;
		req.session.user = user;

		// Redirecciono a la pagina principal
		res.redirect('/');
	}
);

usersRouter.post('/logout', (req, res) => {
	req.session.destroy();
	//res.status(200).json({ message: 'Logged out' });
	res.redirect('/login');
});

export default usersRouter;
