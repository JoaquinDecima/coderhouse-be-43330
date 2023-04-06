/**
 * Defino saludaPorTerminal3
 * @param {String} nombre Nombre de la persona a saludar
 * @param {String} apellido Apellido de la persona a saludar
 */
function saludaPorTerminal3(nombre, apellido) {
	// Concatenado comun de string
	console.log('Hola ' + nombre + ' ' + apellido + ' ' + (2 + 45));
	// Template String con variables
	console.log(`Hola ${nombre} ${apellido} ${2 + 45}`);
}

saludaPorTerminal3('Mariano', 'Serra');
