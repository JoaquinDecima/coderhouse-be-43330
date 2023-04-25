// importamos el paquete express
import express from 'express';
// const express = require('express');

// Creamos la aplicación
const app = express();

// Definimos el metodo Get para la ruta /bienvenida
app.get('/bienvenida', (req, res) => {
	// Enviamos una respuesta (en HTML)
	res.send('<p style="color:blue;">Bienvendo</p>');
});

// Definimos el metodo Get para la ruta /usuario
app.get('/usuario', (req, res) => {
	// Creamos un objeto con los datos del usuario
	const user = {
		name: 'Juan',
		lastname: 'Perez',
		age: 30,
		email: 'juan.perez@emial.net',
	};
	// Enviamos una respuesta (en JSON)
	res.send(user);
});

// Escuchamos el puerto 8080
app.listen(8080, () => {
	console.log('Estoy escuchando el 8080');
});
