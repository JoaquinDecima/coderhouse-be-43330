import express from 'express';
import handlerbars from 'express-handlebars';
import { Server } from 'socket.io';
import viewsRouter from './routers/views.router.js';

// Inicialización de la app
const app = express();
// Array de mensajes
const messages = [];

// Middelare para parseo de json
app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Set handlebars
app.engine('handlebars', handlerbars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

// Seteo el directorio de archivos estáticos
app.use(express.static('public'));

// Rutas
app.use('/', viewsRouter);

// Inicialización del servidor
const webServer = app.listen(8080, () => {
	console.log('Escuchando 8080');
});

// Inicialización de socket.io
const io = new Server(webServer);

// Eventos de socket.io
io.on('connection', (socket) => {
	console.log('Nuevo cliente conectado!');
	// Envio los mensajes al cliente que se conectó
	socket.emit('messages', messages);

	// Escucho los mensajes enviado por el cliente y se los propago a todos
	socket.on('new-message', (message) => {
		console.log(message);
		// Agrego el mensaje al array de mensajes
		messages.push(message);
		// Propago el evento a todos los clientes conectados
		io.emit('messages', messages);
	});
});
