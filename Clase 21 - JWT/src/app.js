import express from 'express';
import { generateToken, authToken } from './middleware/jwt.middleware.js';

const app = express();
const privatekey = 'privatekey';
const users = [];

app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
	const { username, password } = req.body;
	const exist = users.find((user) => user.username === username);

	if (exist) {
		res.status(400).send({ message: 'User already exists' });
	}

	const user = { username, password };
	users.push(user);
	res.status(201).send({ message: 'User created' });
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const user = users.find((user) => user.username === username);

	if (!user) {
		res.status(401).send({ message: 'User not found' });
	}

	if (user.password !== password) {
		res.status(401).send({ message: 'User or Password not valid' });
	}

	const token = generateToken(user);
	res.status(200).send({ token });
});

app.get('/private', authToken, (req, res) => {
	res.status(200).send({ message: 'Private route', user: req.user });
});

app.listen(8080, () => {
	console.log('escucho el 8080');
});
