/**
 * Permite dividir 2 numeros
 * @param {number} dividendo Dividendo
 * @param {number} divisor Divisor
 * @returns Una promesa de division
 */
const div = (dividendo, divisor) => {
	// Retorno una promesa
	return new Promise((resolve, reject) => {
		// Si el divivisor es 0
		if (divisor === 0) {
			// Rechazo la promesa
			reject(`No se divide por 0`);
		} else {
			// Resuelvo la promesa con el resultado
			resolve(dividendo / divisor);
		}
	});
};

/**
 * Defino una funcion asinscronica
 * @returns No retorna nada
 */
const funcionAsincronica = async () => {
	// Creo la variable resultado
	let result;
	// Intento...
	try {
		/* Seteo como resultado el esperar la divicion de 123 / 0
		 * Uso el metodo esperar para que se resuelva la promesa que me
		 * retorna la funcion div creada arriba
		 */
		result = await div(123, 0);
		// Imprimo el resultado en la terminal
		console.log(`Dio ${result}`);
	} catch (err) {
		// En el caso que div salga por erro imprimo el error en la pantalla
		console.log('Algo malio sal');
		console.log(err);
		console.log('Deberia aprender a dividir');
	}
	return result;
};

// Prueba
funcionAsincronica();
