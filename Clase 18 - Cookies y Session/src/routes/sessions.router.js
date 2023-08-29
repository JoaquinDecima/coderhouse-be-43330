import { Router } from 'express';

const sessionRouter = Router();

sessionRouter.get('/', (req, res) => {
	if (req.session.counter) {
		req.session.counter++;
		res.send(`Se visitio el sitio ${req.session.counter} veces`);
	} else {
		req.session.counter = 1;
		res.send('Welcome pero no por mucho rato');
	}
});

sessionRouter.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (!err) {
			res.send('Nos vemos maquinola cosmica');
		} else {
			res.status(500).send('Vos de aca no te vas papu...');
		}
	});
});

export default sessionRouter;
