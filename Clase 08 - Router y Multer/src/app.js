import express from 'express';
import { petsRouter } from './routers/pets.router.js';
import { usersRouter } from './routers/users.router.js';

// Creo app Express
const app = express();

// Seteo carpeta public como raiz de servidor estatico
app.use(express.static('public'));

// Middelare para parseo de json
app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Utilizo ruta de users para "/api/users"
app.use('/api/users', usersRouter);
// Utilizo ruta de pets para "/api/pets"
app.use('/api/pets', petsRouter);

// Escucho puero 8080
app.listen(8080, () => {
	console.log('Levante el server');
});
