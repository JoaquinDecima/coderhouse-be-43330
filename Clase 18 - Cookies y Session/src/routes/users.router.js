import { Router } from 'express';

const userRouter = Router();

userRouter.post('/login', (req, res) => {
	const { user, pass } = req.body;
	if (user !== 'Pato' && pass !== 'pato') {
		res.status(403).send('Usuario o contraseña Invalido');
	} else {
		req.session.user = user;
		req.session.admin = true;
		res.status(201).send('Inicio Session correctamente');
	}
});

userRouter.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (!err) {
			res.send('Nos vemos maquinola cosmica');
		} else {
			res.status(500).send('Vos de aca no te vas papu...');
		}
	});
});

export default userRouter;
