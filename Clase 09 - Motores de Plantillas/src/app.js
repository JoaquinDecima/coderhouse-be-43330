import express from 'express';
import handlerbars from 'express-handlebars';
import userRouter from './routers/users.router.js';
import viewsRouter from './routers/views.router.js';

const app = express();

// Middelare para parseo de json
app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Set handlebars
app.engine('handlebars', handlerbars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/', viewsRouter);
app.use('/api/users', userRouter);

app.listen(8080, () => {
	console.log('Escuchando 8080');
});
