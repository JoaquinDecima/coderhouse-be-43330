// importamos el paquete express
import express from 'express';
// const express = require('express');
// importamos la clase UserManager
import UserManager from './UsersManager.js';

// Creamos la aplicación
const app = express();
// Creamos una instancia de la clase UserManager
const userManager = new UserManager();

// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Definimos el metodo Get para la ruta /users
app.get('/users', async (req, res) => {
	// intento...
	try {
		// obtengo todos los usuarios
		let allUSers = await userManager.getUsers();
		// envio la respuesta
		res.send(allUSers);
	} catch (err) {
		// si hay un error lo envio
		res.send(err);
	}
});

// Escuchamos el puerto 8080
app.listen(8080, () => {
	console.log('Estoy escuchando el 8080');
});
