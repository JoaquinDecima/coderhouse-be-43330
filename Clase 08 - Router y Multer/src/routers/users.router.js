import { Router } from 'express';

// Creo un array para usuarios
const users = [];

// Creo una ruta
const usersRouter = Router();

// Agregp get que retorna usuarios
usersRouter.get('/', (req, res) => {
	res.send(users);
});

// crep post que agrega usuarios
usersRouter.post('/', (req, res) => {
	const user = req.body;
	users.push(user);
	res.status(201).send(user);
});

// Exporto la ruta
export { usersRouter };
