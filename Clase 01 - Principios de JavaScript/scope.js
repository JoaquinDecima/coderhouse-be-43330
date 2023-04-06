// -------------------------------------------------
// --               Scope correcto                --
// -------------------------------------------------

function scopeCorrecto() {
	// Inicia scope de function
	// La variable i vive dentro del scope de function
	let i = 0;
	if (true) {
		// Inicia scope de if
		// i se puede reasignar porque el if esta dentro del scope de function
		i = 1;
		// Finaliza scope de if
	}
	// Podemos mostrar el valor de i porque estamos dentro de function
	console.log(i);
	// Finaliza scope de function
}

scopeCorrecto();

// -------------------------------------------------
// --              Scope incorrecto               --
// -------------------------------------------------

function scopeIncorrecto() {
	// Inicia scope de function
	if (true) {
		// Inicia scope de if
		// La variable i vive dentro del scope de if
		let i = 0;
		// i se puede reasignar porque el if esta dentro del scope
		i = 1;
		// Finaliza scope de if
	}
	// No podemos mostrar el valor de i porque estamos dentro de if
	console.log(i); // Error
	// Finaliza scope de function
}

scopeIncorrecto();
