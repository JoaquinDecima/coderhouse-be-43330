// Defino el clousure en la constante add
const add = (function () {
	// Defino la variable "privada" counter
	// Usamos var para ejemplificar antiguas practicas
	var counter = 0;

	//Esta funcion retorna otra funcion
	return function () {
		// Esta funcion incrementa en 1 el valor de counter
		counter += 1;
		// Y retorna el valor de counter
		return counter;
	};
})();

// ATENCION: Solo usamos console.log para poder imprimir en pantalla el valor retornado
console.log(add());
console.log(add());
console.log(add());

// ¿Que paso?

// Al mantener la funcion add siempre viva su variable interna se mantiene viva mas alla de que la funcion que retorna se ejecute y termine
