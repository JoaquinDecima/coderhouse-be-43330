// Objetos de consiga (en un array)
const objetos = [
	{
		manzanas: 3,
		peras: 2,
		carne: 1,
		jugos: 5,
		dulces: 2,
	},
	{
		manzanas: 1,
		sandias: 1,
		huevos: 6,
		jugos: 1,
		panes: 4,
	},
];

// Nuevo array para retornar
let newArray = [];

// Recorro el Array objetos ejecutando codigo por cada objeto
objetos.forEach((objeto) => {
	// Me quedo con las claves del objeto actual
	const keys = Object.keys(objeto);
	//recorro las claves del objeto actual
	keys.forEach((key) => {
		// Por cada clave pregunto si esta NO esta incluida en el array
		// de no estar incluida la agrego
		if (!newArray.includes(key)) newArray.push(key);
	});
});

// Muestro el array final
console.log(newArray);

// Creo variable con el total vendido
let totalVendido = 0;

// Recorro el Array objetos ejecutando codigo por cada objeto
objetos.forEach((objeto) => {
	// Me quedo con los valores del objeto actual
	const values = Object.values(objeto);
	// Al total vendido le sumo todos los vendidos en este objeto
	// El reduce se encarga de sumar todos los values de la lista
	// Y solo queda incrementar el valor de totalvendido
	totalVendido += values.reduce((actual, acumulado) => actual + acumulado);
	// El uso de += es igua a la siguiente forma de incrementar el valor de la variable
	// totalVendido = totalVendido + values.reduce((actual, acumulado) => actual + acumulado);
});

// Muestro el total vendido
console.log(totalVendido);

/**
 * Soluciones propuestas por compañeros de clase
 */

// Natalia Chiara
const listaNueva = { ...objetos[0], ...objetos[1] };
console.log(Object.keys(listaNueva));
// Funciona pero no es extensible a Arrays con mas objetos

// Mejora convinando el metodo inicial con el de Natalia
// Y sumando el fix de Fernando
let newArray2;

objetos.forEach((objeto) => {
	// Fernando Gomez
	newArray2 = { ...newArray2, ...objeto };
});

console.log(Object.keys(newArray2));
