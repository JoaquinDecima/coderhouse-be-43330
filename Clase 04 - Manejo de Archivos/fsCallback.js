// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

/* Escribo el archivo './fsCallback.txt' poniendo dentro
 * 'Estoy escribiendo un Archivo con Callback \n' de manera sincronica
 */
fs.writeFile(
	'./fsCallback.txt',
	'Estoy escribiendo un Archivo con Callback \n',
	(err) => {
		// Si hay error salgo del callback
		if (err) return console.log('No se escribir');

		// Leo el archivo './fsCallback.txt'.
		fs.readFile('./fsCallback.txt', 'utf-8', (err, contenido) => {
			// Si hay error salgo del callback
			if (err) return console.log('No se Leer');
			console.log(contenido); // Imprimo en pantalla

			// Agrego al archivo './fsCallback.txt' el texto 'Aca agrego algo mas'
			fs.appendFile('./fsCallback.txt', 'Aca agrego algo mas', (err) => {
				// Si hay error salgo del callback
				if (err) return console.log('No se escribir');

				// Leo el archivo './fsCallback.txt'.
				fs.readFile('./fsCallback.txt', 'utf-8', (err, contenido) => {
					// Si hay error salgo del callback
					if (err) return console.log('No se Leer');
					console.log(contenido); // Imprimo en pantalla

					// Borro el archivo
					fs.unlink('./fsCallback.txt', (err) => {
						// Si hay error salgo del callback
						if (err) return console.log('No se Borrar');
					});
				});
			});
		});
	}
);
