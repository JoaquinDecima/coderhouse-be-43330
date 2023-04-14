// Creo una funcion que logea lo que se le envia por parametro
function myCallback(param) {
	console.log(param);
}

// Creo una funcion que implementa la funcion enviada con el paramatro enviado
function eject(param, callback) {
	return callback(param);
}

// Creo una funcion que implementa 2 veces la misma funcion a un parametro
function twice(param, callback) {
	return callback(callback(param));
}

// Pruebas
console.log(eject(1, (x) => x + 1));
console.log(twice(1, (x) => x + 1));

eject('Hola', myCallback);

/* myCallback es una funcion como cualquier otra y puedo usarla sin
 * pasarla como parametro
 */
myCallback('Hola pero no como callback');
