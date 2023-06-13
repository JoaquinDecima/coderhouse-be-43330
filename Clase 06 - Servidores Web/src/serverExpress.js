// importamos el paquete express
import express from 'express';
// const express = require('express');

// Creamos la aplicación
const app = express();

// Definimos el metodo Get para la ruta /saludo
app.get('/saludo', (req, res) => {
	// Enviamos una respuesta
	res.send('Este es mi primer Hola Mundo desde Backend Con Express');
});

// Escuchamos el puerto 8080
app.listen(8080, () => {
	console.log('Estoy escuchando el 8080');
});
