// Importamos el paquete http de node
import http from 'http';

// Creamos el servidor
const server = http.createServer((req, res) => {
	console.log(req); // Imprimimos la petición
	res.end('Mi primer Hola Mundo desde un Backend'); // Enviamos una respuesta
});

// Escuchamos el puerto 8080
server.listen(8080, () => {
	console.log('Escuchando puerto 8080'); // Imprimimos un mensaje en la consola
});
