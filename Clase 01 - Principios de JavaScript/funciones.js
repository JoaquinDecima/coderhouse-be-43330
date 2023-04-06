// -------------------------------------------------
// --                Funcion Comun                --
// -------------------------------------------------

/** Defino la funcion saludaPorTerminal
 * @param {string} nombre
 * tiene un parametro que es un string que representa el nombre de la persona a la que se saluda
 */
function saludaPorTerminal(nombre) {
	// Imprimo por terminal "Hola " + el nombre de la persona
	console.log('Hola ' + nombre);
}

saludaPorTerminal('Mariano');

// -------------------------------------------------
// --               Funcion Flecha                --
// -------------------------------------------------

/** Defino una funcion en la constante saludaPorTerminal2
 * @param {string} nombre
 * tiene un parametro que es un string que representa el nombre de la persona a la que se saluda
 */
const saludaPorTerminal2 = (nombre) => console.log('Hola ' + nombre); // en una linea

saludaPorTerminal2('Valentino');
