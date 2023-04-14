/**
 * Permite Sumar 2 numeros
 * @param {number} num1 Primer Numero de la Suma
 * @param {number} num2 Segundo Numero de la Suma
 * @returns Resultado de la suma
 */
const sumar = (num1, num2) => num1 + num2;

/**
 * Permite Restar 2
 * @param {number} num1 Primer Numero de la resta
 * @param {number} num2 Segundo Numero de la resta
 * @returns Resultado de la resta
 */
const resta = (num1, num2) => num1 - num2;

/**
 * Permite Dividir 2 numeros
 * @param {number} num1 Primer Numero de la division
 * @param {number} num2 Segundo Numero de la division
 * @returns Resultado de la division
 */
const div = (num1, num2) => num1 / num2;

/**
 * Permite Multiplicar 2 numeros
 * @param {number} num1 Primer Numero de la multiplicacion
 * @param {number} num2 Segundo Numero de la multiplicacion
 * @returns Resultado de la multiplicacion
 */
const mul = (num1, num2) => num1 * num2;

/**
 * Permite procesar los calculos!
 * @param {number} num11 Primer numero para la Operacion
 * @param {number} num22 Segundo numero para la Operacion
 * @param {Function} callback Funcion que opera los 2 numeros anteriores
 * @returns
 */
const calc = (num11, num22, callback) => {
	// Seteo el resultado como aplicar la funcion a los parametros
	const resultado = callback(num11, num22);
	// Imprimo el resultado por la terminal
	console.log(`Dio ${resultado}`);
	// Retrono el resultado
	return resultado;
};

// Pruebas
calc(4, 2, sumar);
calc(4, 2, resta);
calc(4, 2, div);
calc(4, 2, mul);
calc(4, 2, (n1, n2) => n1 ** n2);
calc(4, 2, (n1, n2) => 'a');
