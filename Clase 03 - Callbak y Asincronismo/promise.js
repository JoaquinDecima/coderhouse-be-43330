/**
 * Permite Dividir 2 numeros solo si el divisor es distinto de 0
 * @param {number} num1 Primer Numero de la division
 * @param {number} num2 Segundo Numero de la division
 * @returns Promesa de division
 */
const div = (dividendo, divisor) => {
	// Retorno una promesa
	return new Promise((resolve, reject) => {
		// Si el divisor es 0
		if (divisor === 0) {
			// Rechazo la promesa
			reject(`No se divide por 0`);
		} else {
			// Resuelvo con el resultado
			resolve(dividendo / divisor);
		}
	});
};

// Pruebas
div(1235, 0)
	.then((x) => {
		// Si resuelve muestro el resultado en pantalla
		console.log(`Dio ${x}`);
	})
	.catch((err) => {
		// Si falla muestro el error
		console.log('Algo malio sal');
		console.log(err);
		console.log('Deberia aprender a dividir');
	});

div(1235, 5)
	.then((x) => {
		// Si resuelve muestro el resultado en pantalla
		console.log(`Dio ${x}`);
	})
	.catch((err) => {
		// Si falla muestro el error
		console.log('Algo malio sal');
		console.log(err);
		console.log('Deberia aprender a dividir');
	});
