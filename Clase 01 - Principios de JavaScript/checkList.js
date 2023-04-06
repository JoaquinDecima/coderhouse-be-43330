const myList = [1, 2, 3];

/**
 * Defino checkList usando operaciones entre booleanos
 * @param {Array} list Lista
 * @param {any} objet Elemento a buscar en la lista
 * @returns {Boolean} true si la encuentra
 */
function checkList(list, objet) {
	// Defino mi variable found en falso para poderla operar
	let found = false;
	// Recorro todos los elementos de la lista
	list.forEach((elem) => {
		// Por cada elemento redefino found por:
		// el valor actual o (or ||) [si el elemento actual es el objeto que busco]
		found = found || elem === objet;
	});
	// Retorno el resultado final
	return found;
}

console.log(checkList(myList, 2));
console.log(checkList(myList, 9));
console.log(checkList([8, 12, 3123, 1], 8));

/**
 * Defino checkListWhitIf usando un if
 * @param {Array} list Lista
 * @param {any} objet Elemento a buscar en la lista
 * @returns {Boolean} true si la encuentra
 */
function checkListWhitIf(list, objet) {
	// Defino que no encontre el elemento antes de buscarlo
	let found = false;
	// Recorro toda la lista
	list.forEach((elem) => {
		// Por cada elemento pregunto si NO lo econtre (!found)
		// es decir que pregunto si found es falso
		if (!found) {
			// Si no lo encontre entonces me guardo si el actual es (puede ser true o false)
			found = elem === objet;
		}
		// En el caso de que ya lo encontre no voy a chequear el actual por lo cual quedara en true
	});
	// Retorno el valor final
	return found;
}
