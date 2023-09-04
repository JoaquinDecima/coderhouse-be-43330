let myArray = [1, 2, 3, 4, 5];

/**
 * Una funcion que replica lo que hace Map
 * @param {Array} array
 * @param {Function} callback
 * @returns
 */
const myMap = (array, callback) => {
	// Creo un nuevo array que voy a retornar
	let newArray = [];
	// Utilizo for para iterar el array
	for (let i = 0; i < array.length; i++) {
		/* Creo nueva variable que es igual a aplicarle la funcion que
		 * me envian por parametro al elemento correspondiente al indice
		 * de la iteracion actual del for
		 */
		let newValue = callback(array[i]);
		// Agrego el elemento al array a retornar
		newArray.push(newValue);
	}
	// Retorno el array creado
	return newArray;
};

/**
 * Una funcion que retorna el parametro en un string diciendo que es genial
 * @param {any} x
 * @returns {String} Un string diciendo que es genial
 */
const myFunction = (x) => {
	return `¡${x} es Genial!`;
};

// Prueba
let values = myMap(myArray, myFunction);
console.log(values);

// Defino una nueva funcion para TODOS los Arrays similar a map
Array.prototype.myMap = function (callback) {
	// Creo un nuevo array que voy a retornar
	let newArray = [];
	/* Utilizo for para iterar this (la instancia especifica
	 * a la que se le envia el mensaje)
	 */
	for (let i = 0; i < this.length; i++) {
		/* Creo nueva variable que es igual a aplicarle la funcion que
		 * me envian por parametro al elemento correspondiente al indice
		 * de la iteracion actual del for
		 */
		let newValue = callback(this[i]);
		// Agrego el elemento al array a retornar
		newArray.push(newValue);
	}
	return newArray;
};

// Prueba
let myArray2 = [1, 2, 3, 4, 5];
let values2 = myArray2.myMap(myFunction);
console.log(values2);
