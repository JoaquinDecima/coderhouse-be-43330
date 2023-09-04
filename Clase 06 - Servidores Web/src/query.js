// importamos el paquete express
import express from 'express';
// const express = require('express');

// Creamos la aplicación
const app = express();

// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Definimos una lista de usuarios
const users = [
	{
		id: '1',
		name: 'Davila',
		lastname: 'Mitcher',
		age: 30,
		email: 'juan.perez@emial.net',
		genre: 'F',
	},
	{
		id: '2',
		name: 'Julian',
		lastname: 'Fuentes',
		age: 30,
		email: 'juan.perez@emial.net',
		genre: 'M',
	},
	{
		id: '3',
		name: 'Leandro',
		lastname: 'More',
		age: 30,
		email: 'juan.perez@emial.net',
		genre: 'M',
	},
];

// Definimos el metodo Get para la ruta /users
app.get('/users', (req, res) => {
	// Obtenemos el genero de la query
	let genero = req.query.genero;
	// Si no hay genero o no es F o M, devolvemos todos los usuarios
	if (!genero || (genero !== 'F' && genero !== 'M')) {
		res.send(users); // Devolvemos todos los usuarios
	} else {
		// Si hay genero, devolvemos los usuarios que coincidan con el genero
		res.send(users.filter((user) => user.genre === genero));
	}
});

// Escuchamos el puerto 8080
app.listen(8080, () => {
	console.log('Estoy escuchando el 8080');
});
