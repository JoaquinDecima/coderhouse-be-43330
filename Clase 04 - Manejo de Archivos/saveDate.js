// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

// Guardo en alrchivo './saveDate.txt' la fecha actual
fs.writeFile('./saveDate.txt', `${new Date()}`, (err) => {
	// Si hay error salgo del callback
	if (err) return console.log('No se escribir');

	// Leo el archivo './saveDate.txt'
	fs.readFile('./saveDate.txt', 'utf-8', (err, contenido) => {
		// Si hay error salgo del callback
		if (err) return console.log('No se leer');
		console.log(contenido); // Muestro el contenido el terminal

		// Elimino el archivo './saveDate.txt'
		fs.unlink('./saveDate.txt', (err) => {
			// Si hay error salgo del callback
			if (err) return console.log('No se Borrar');
		});
	});
});
