/**
 * Permite Sumar 2 numeros solo si el resultado es positivo y ninguno
 * de estos numeros es 0
 * @param {number} num1 Primer Numero de la Suma
 * @param {number} num2 Segundo Numero de la Suma
 * @returns Promesa de suma
 */
const suma = (num1, num2) => {
	// Retorno una promesa
	return new Promise((resolve, reject) => {
		// Si alguno de los numeros es 0
		if (num1 === 0 || num2 === 0) {
			// Rechazo la promesa
			reject('Suma innecesaria');
		} else {
			// Realizo la suma
			let result = num1 + num2;
			// Si el resultado es negativo
			if (result < 0) {
				// Rechazo la promesa
				reject('Solo soy positivo');
			}
			// Resuelvo con el resultado
			resolve(result);
		}
	});
};

/**
 * Permite Restar 2 numeros solo si el resultado es positivo y ninguno
 * de estos numeros es 0
 * @param {number} num1 Primer Numero de la resta
 * @param {number} num2 Segundo Numero de la resta
 * @returns Promesa de resta
 */
const resta = (num1, num2) => {
	// Retorno una promesa
	return new Promise((resolve, reject) => {
		if (num1 === 0 || num2 === 0) {
			// Rechazo la promesa
			reject('Resta innecesaria');
		} else {
			// Realizo la resta
			let result = num1 - num2;
			// Si el resultado es negativo
			if (result < 0) {
				// Rechazo la promesa
				reject('Solo soy positivo');
			}
			// Resuelvo con el resultado
			resolve(result);
		}
	});
};

/**
 * Permite Dividir 2 numeros solo si el divisor es distinto de 0 y el
 * el resultado es positivo
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
			// Realizo la divicion
			let result = dividendo / divisor;
			// Si el resultado es negativo
			if (result < 0) {
				// Rechazo la promesa
				reject('Solo soy positivo');
			}
			// Resuelvo con el resultado
			resolve(result);
		}
	});
};

/**
 * Permite Multiplicar 2 numeros solo si los numeros no son negativos y el
 * resultado no es negativo
 * @param {number} num1 Primer Numero de la multiplicacion
 * @param {number} num2 Segundo Numero de la multiplicacion
 * @returns Promesa de multiplicacion
 */
const mul = (num1, num2) => {
	// Retorno una promesa
	return new Promise((resolve, reject) => {
		if (num1 < 0 || num2 < 0) {
			// Rechazo la promesa
			reject('Multiplicacion fea');
		} else {
			let result = num1 * num2;
			// Si el resultado es negativo
			if (result < 0) {
				// Rechazo la promesa
				reject('Solo soy positivo');
			}
			// Resuelvo con el resultado
			resolve(result);
		}
	});
};

/**
 * Permite procesar los calculos!
 * @param {number} num11 Primer numero para la Operacion
 * @param {number} num22 Segundo numero para la Operacion
 * @param {Function} callback Funcion que opera los 2 numeros anteriores
 * @returns
 */
const calculos = async (num11, num22, callback) => {
	// Intento...
	try {
		/* Seteo un resultado esperando la ejecuccion de la funcion enviada
		 * por parametro
		 */
		const resultado = await callback(num11, num22);
		// Imprimo el resultado por la terminal
		console.log(`Dio ${resultado}`);
		// Retrono el resultado
		return resultado;
	} catch (err) {
		// Si falla la Promesa imprimo el error en la terminal
		console.log(`ERROR: ${err}`);
		console.log('Aprende operaciones...');
	}
};

// Pruebas
calculos(4, 2, suma);
calculos(4, 2, resta);
calculos(4, 2, div);
calculos(4, 2, mul);
calculos(4, 0, suma);
calculos(1, -52, suma);
calculos(4, 0, resta);
calculos(4, 89, resta);
calculos(4, 0, div);
calculos(4, -1, mul);
