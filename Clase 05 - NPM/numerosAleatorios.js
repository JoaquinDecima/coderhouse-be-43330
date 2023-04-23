// Creo un objeto para los numeros aleatorios
const randomsNumbers = {};

/**
 * repite la funcion fn n veces
 * @param {number} n cantidad de repeticiones
 * @param {Function} fn funcion a ejecutar
 */
function repeat(n, fn) {
	for (let i = 0; i < n; i++) {
		fn();
	}
}

/**
 * Retorna un numero aleatorio entre min y max
 * @param {number} min Numero minimo
 * @param {number} max Numero maximo
 * @returns Un numero aleatorio entre min y max
 */
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Agrega un numero aleatorio al objeto randomsNumbers */
function addRandomNumberInObject() {
	// Obtengo un numero aleatorio entre 1 y 20
	const random = randomInteger(1, 20);
	// Si el numero aleatorio ya existe en el objeto, le sumo 1
	// Si no existe, lo creo con el valor 1
	randomsNumbers[random] = randomsNumbers[random]
		? randomsNumbers[random] + 1
		: 1;
}

// Ejecuto la funcion addRandomNumberInObject 10000 veces
repeat(10000, addRandomNumberInObject);

// Muestro el objeto con los numeros aleatorios
console.log(randomsNumbers);

// Julian Fuentes
const crearAleatorios = () => {
	let arrayValores = [];
	for (let i = 0; i < 10000; i++) {
		const aleatorio = Math.floor(Math.random() * 20) + 1;
		arrayValores[aleatorio]
			? arrayValores[aleatorio]++
			: (arrayValores[aleatorio] = 1);
	}
	let objeto = {};
	for (let i = 1; i < 21; i++) {
		objeto[i] = arrayValores[i];
	}
	console.log(objeto);
};
crearAleatorios();
