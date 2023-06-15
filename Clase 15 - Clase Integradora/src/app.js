import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import studentRouter from './routers/student.router.js';
import courseRouter from './routers/course.router.js';
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

app.use('/api/students', studentRouter);
app.use('/api/courses', courseRouter);
app.use('/', viewsRouter);

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

app.listen(8080, () => {
	console.log('escucho el 8080');
});
