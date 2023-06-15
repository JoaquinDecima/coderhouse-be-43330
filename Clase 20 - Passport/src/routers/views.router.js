import { Router } from 'express';
import { isAuth, isGuest } from '../middleware/auth.middleware.js';

const viewsRouter = Router();

viewsRouter.get('/', isAuth, (req, res) => {
	const { user } = req.session;
	delete user.password;
	res.render('index', {
		title: 'Perfil de Usuario',
		user,
	});
});

viewsRouter.get('/register', isGuest, (req, res) => {
	res.render('register', {
		title: 'Registrar Nuevo Usuario',
	});
});

viewsRouter.get('/login', isGuest, (req, res) => {
	res.render('login', {
		title: 'Inicio de Sesión',
	});
});

export default viewsRouter;
