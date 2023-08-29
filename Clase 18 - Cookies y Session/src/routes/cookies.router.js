import { Router } from 'express';

const cookieRouter = Router();

cookieRouter.get('/get', (req, res) => {
	res.send(req.cookies);
});

cookieRouter.get('/set', (req, res) => {
	res.cookie('Verdad', 'El que juega al LoL no tiene dedos', {
		maxAge: 1000000,
	}).send('Se Guardo la Verdad unica');
});

cookieRouter.get('/getSigned', (req, res) => {
	res.send(req.signedCookies);
});

cookieRouter.get('/setSigned', (req, res) => {
	res.cookie('La Mayor verdad', 'El valorant tambien es para mancos', {
		maxAge: 1000000,
		signed: true,
	}).send('Se Guardo la Mayor Verdad');
});

cookieRouter.get('/delete', (req, res) => {
	res.clearCookie('Verdad').send('Se borro la verdad que no podian tolerar');
});

cookieRouter.post('/', (req, res) => {
	const email = req.body.email;
	res.cookie('user', email, {
		maxAge: 10000,
	})
		.status(201)
		.send('Se guardo el email');
});

export default cookieRouter;
