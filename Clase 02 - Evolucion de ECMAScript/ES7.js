// Tengo un array con numeros
let valoresBase = [1, 2, 3, 4, 5, 6];
// Utilizo map para modificar cada valor del array por el numero elevado al indice
let nuevosValores = valoresBase.map((num, index) => num ** index);
console.log(nuevosValores);

// Tengo un array con numeros
let nombres = ['Pato', 'Lean', 'Juli', 'Sofi'];

// Utilizo la funcion includes para saber si se encuentra el nombre Sofi
if (nombres.includes('Sofi')) {
	console.log('Esta Sofia');
} else {
	console.log('No Esta Sofia');
}
