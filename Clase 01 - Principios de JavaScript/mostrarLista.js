/**
 * Defino mostrarLista
 * @param {Array} list Lista a mostrar
 * @returns {String} Cantidad de elementos
 */
function mostrarLista(list) {
	// Defino como constante la cantidad de elemntos de la lista enviada por paramentro
	const cantElem = list.length;

	// Pregunto "Si (cantidad de elementos)" dado que en JavaScript el 0 se toma como
	// falso por lo cual si tiene 1 o mas lo tomara como true
	if (cantElem) {
		// Si tiene 1 elemento o mas
		// Recorro los elementos de la lista
		list.forEach((element) => {
			// Por cada elemento  lo muestro en la terminal
			console.log(element);
		});
	} else {
		// Si no tiene elementos informo que esta vacia
		console.log('Lista vacia');
	}

	// Retorno la cantidad de elementos
	return `Cantidad de Elementos: ${cantElem}`;
}

console.log(mostrarLista([]));
console.log(mostrarLista([1, 'pepe']));
console.log(mostrarLista([1, 'pepe', null, undefined]));
