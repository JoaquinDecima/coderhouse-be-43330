let cadena1 = '                         hola';
console.log(cadena1);
// Utilizo trim para eliminar los espacios innecesarios al principio
console.log(cadena1.trim());

let intencionDeMensaje = '                         ';

// Utilizo trim para chequear si la cadena tiene informacion util
// Al solo tener espacios me queda una cadena que tiene 0 caracteres
if (intencionDeMensaje.trim().length > 0) {
	console.log('Es un mensaje util');
} else {
	console.log('NO es un mensaje util');
}

let arrayAnidado = [1, 2, 4, [5, 6, 8], 9, [10, 11]];

console.log(arrayAnidado);
// flat me permite aplanar una lista que contiene listas en su interior
console.log(arrayAnidado.flat());
