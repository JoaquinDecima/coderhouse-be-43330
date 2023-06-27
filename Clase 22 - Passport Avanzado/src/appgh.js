import express from 'express';
import handlebars from 'express-handlebars';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import session from 'express-session';
import incializePassport from './config/passport.config.js';

import sessionsRouter from './routers/sessions.router.js';
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

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

incializePassport();

// Routes
app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(8080, () => {
	console.log('escucho el 8080');
});
