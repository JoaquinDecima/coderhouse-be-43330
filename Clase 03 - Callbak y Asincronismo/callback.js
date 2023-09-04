let myArray = [1, 2, 3, 4, 5];
// Utilizamos un callback como estamos acostumbrados
let values = myArray.map((x) => x ** 2);

// Prueba
console.log(values);

/**
 * Toma un numero por parametro y si es par lo eleva al cubo
 * en el caso contrario, le suma 3 y lo eleva al cuadrado
 * @param {number} x Numero a elevar
 * @returns El resultado del calculo
 */
const myFunction = (x) => {
	// Verifico si el numero es par (viendo si el resto de la divicion por 2 es 0)
	if (x % 2 === 0) {
		// Retorno x al cubo
		return x ** 3;
	} else {
		// Retorno x mas 3 al cuadrado
		return (x + 3) ** 2;
	}
};

// Prueba
let values2 = myArray.map(myFunction);
console.log(values2);
console.log(myFunction(189));
