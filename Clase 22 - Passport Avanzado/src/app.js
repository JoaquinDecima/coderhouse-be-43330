import express from 'express';
import passport from 'passport';
import incializePassport from './config/passport.config.js';
import cookieParser from 'cookie-parser';
import {
	generateToken,
	middlewarePassportJWT,
} from './middleware/jwt.middleware.js';

const app = express();
const privatekey = 'privatekey';
const users = [{ username: 'admin', password: 'admin' }];

app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('B2zdY3B$pHmxW%'));
incializePassport();
app.use(passport.initialize());

// Seteo el directorio de archivos estáticos
app.use(express.static('public'));

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
	res.cookie('token', token, {
		httpOnly: true,
		maxAge: 60000,
	}).send();
});

app.get('/private', middlewarePassportJWT, (req, res) => {
	res.status(200).send({ message: 'Private route', user: req.user });
});

app.listen(8080, () => {
	console.log('escucho el 8080');
});
