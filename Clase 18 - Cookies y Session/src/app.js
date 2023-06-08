import cookieParser from 'cookie-parser';
import express from 'express';
import handlebars from 'express-handlebars';

import cookieRouter from './routes/cookies.router.js';
import viewsRouter from './routes/views.router.js';

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

// Routes
app.use('/cookies', cookieRouter);
app.use('/', viewsRouter);

app.listen(8080, () => {
	console.log('escucho el 8080');
});
