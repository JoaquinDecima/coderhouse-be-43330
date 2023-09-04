import { Router } from 'express';
import { auth } from '../middlewares/auth.js';

const viewsRouter = Router();

viewsRouter.get('/cookie', (req, res) => {
	res.render('cookie');
});

viewsRouter.get('/private', auth, (req, res) => {
	res.send('Vo si tene permiso...');
});

viewsRouter.get('/', (req, res) => {
	res.render('login');
});

export default viewsRouter;
