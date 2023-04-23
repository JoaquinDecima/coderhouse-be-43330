// Ejercicio: Fechas

// Inicializo moment
const moment = require('moment');
// Obtengo el dia de hoy
const today = moment();
// Obtengo mi cumpleaños
const myBirthday = moment('1996-03-29', 'YYYY-MM-DD');

// Imprimo en consola
console.log(today);
console.log(myBirthday);

// Si mi cumpleaños es valido
if (myBirthday.isValid()) {
	// Imprimo en consola la diferencia entre hoy y mi cumpleaños
	console.log(today.diff(myBirthday, 'days'));
} else {
	// Si no es valido, imprimo en consola 'flasheaste'
	console.log('flasheaste');
}

// Creo un objeto para los cumpleaños
const todos = {
	patoDecima: moment('1996-03-29', 'YYYY-MM-DD'),
	martinIozzi: moment([2003, 06, 17]),
	juliandascanio: moment([1980, 06, 30]),
	marianoGago: moment([1982, 04, 10]),
	juanHillcoat: [1995, 02, 06],
	maxrabow: moment([1984, 1, 20]),
	munozRodrigo: moment([1993, 02, 11]),
};

// Muestro los dias de todos
function mostrarDiasDeTodos() {
	// Obtengo las keys del objeto
	const keys = Object.keys(todos);
	// Recorro las keys
	keys.forEach((key) => {
		// Muestro los dias de cada key
		mostrarDiasDe(key, today.diff(todos[key], 'years'));
	});
}

// Muestro los dias de un nombre
function mostrarDiasDe(nombre, dias) {
	// Imprimo en consola
	console.log(`${nombre} nacio hace ${dias} Años`);
}

// Ejecuto la funcion mostrarDiasDeTodos
mostrarDiasDeTodos();
