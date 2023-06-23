import cookieParser from 'cookie-parser';
import express from 'express';
import handlebars from 'express-handlebars';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import inicializePassport from './config/passport.config.js';

import userRouter from './routers/user.router.js';
import viewsRouter from './routers/views.router.js';

const app = express();

app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Set handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

// Seteo el directorio de archivos estáticos
app.use(express.static('public'));

// Middleware cookies parser
//app.use(cookieParser());
app.use(cookieParser('B2zdY3B$pHmxW%'));

// Session
app.use(
	session({
		store: MongoStore.create({
			mongoUrl:
				'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority',
			mongoOptions: {
				useNewUrlParser: true,
			},
			ttl: 6000,
		}),
		secret: 'B2zdY3B$pHmxW%',
		resave: true,
		saveUninitialized: true,
	})
);
inicializePassport();
app.use(passport.initialize());
app.use(passport.session()); // para que passport maneje la sesión	OJO CON ESTO

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

// Routes
app.use('/', viewsRouter);
app.use('/api/users', userRouter);

app.listen(8080, () => {
	console.log('escucho el 8080');
});
