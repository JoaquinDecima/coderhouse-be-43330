import cookieParser from 'cookie-parser';
import express from 'express';
import handlebars from 'express-handlebars';
import session from 'express-session';

import cookieRouter from './routes/cookies.router.js';
import viewsRouter from './routes/views.router.js';
import sessionRouter from './routes/sessions.router.js';

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
		secret: 'B2zdY3B$pHmxW%',
		resave: true,
		saveUninitialized: true,
	})
);

// Routes
app.use('/cookies', cookieRouter);
app.use('/session', sessionRouter);
app.use('/', viewsRouter);

app.listen(8080, () => {
	console.log('escucho el 8080');
});
