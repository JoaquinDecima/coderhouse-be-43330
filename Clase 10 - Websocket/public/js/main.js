// Inicializamos el socket
const socket = io();

/**
 * Función que se ejecuta en el onclick del botón
 */
function sendMenssage() {
	// Obtengo el mensaje del input
	const message = document.getElementById('message').value;
	// Envío el mensaje al servidor
	socket.emit('new-message', message);
}

/**
 * Función que se ejecuta cuando se recibe un mensaje
 * @param {Array} data
 * @returns {void}
 * @description Recibe un array de mensajes y los renderiza en el html
 * @example
 * render(['Hola', 'Chau'])
 * // Devuelve:
 * // <div>
 * //     <em>Hola</em>
 * // </div>
 * // <div>
 * //     <em>Chau</em>
 * // </div>
 */
function render(data) {
	// Genero el html
	const html = data
		.map((elem, index) => {
			// Recorro el array de mensajes y genero el html
			return `<div>
                <em>${elem}</em>
            </div>`;
		})
		.join(' '); // Convierto el array de strings en un string

	// Inserto el html en el elemento con id messages
	document.getElementById('messages').innerHTML = html;
}

// Escucho el evento messages y renderizo los mensajes
socket.on('messages', (data) => {
	render(data);
});
