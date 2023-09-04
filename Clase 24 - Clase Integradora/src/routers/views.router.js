import Router from 'express';
import { middlewarePassportJWT } from '../middleware/auth.middleware.js';
import postService from '../services/post.service.js';

const viewsRouter = Router();

viewsRouter.get('/', middlewarePassportJWT, async (req, res) => {
	const posts = await postService.getPrivatedPosts();
	res.render('index', { title: 'Inicio', user: req.user, posts });
});

viewsRouter.get('/public', async (req, res) => {
	const posts = await postService.getPublicPosts();
	res.render('public', { title: 'Inicio', posts });
});

viewsRouter.get('/login', (req, res) => {
	res.render('login', { title: 'Inicia Sesion' });
});

viewsRouter.get('/register', (req, res) => {
	res.render('register', { title: 'Registrate' });
});

viewsRouter.get('/404', (req, res) => {
	res.render('404', { title: 'Ups 404' });
});

viewsRouter.get('/error', (req, res) => {
	res.render('error', { title: 'Ups Ocurrio un error' });
});

export default viewsRouter;
