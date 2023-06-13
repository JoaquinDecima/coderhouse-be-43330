// importamos el paquete express
import express from 'express';
import mongoose from 'mongoose';
import studientsRouter from './routers/studients.router.js';
import usersRouter from './routers/users.router.js';

// Creamos la aplicación
const app = express();

app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

app.use('/api/studients', studientsRouter);
app.use('/api/users', usersRouter);

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

app.listen(8080, () => {
	console.log('escucho el 8080');
});
