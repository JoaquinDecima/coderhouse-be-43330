// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

// Defino una funcion asincronica
const opAsync = async () => {
	// Intento...
	try {
		/* Escribo el archivo './fsPromises.txt' poniendo dentro
		 * 'Estoy escribiendo un Archivo con Promesas \n' de manera
		 * asincronica
		 */
		fs.promises.writeFile(
			'./fsPromises.txt',
			'Estoy escribiendo un Archivo con Promesas \n'
		);

		// Guardo en la variable contenido, la lectura del archivo.
		let contenido = await fs.promises.readFile('./fsPromises.txt', 'utf-8');
		console.log(contenido); // Imprimo en pantalla

		// Agrego al archivo './fsPromises.txt' el texto 'Aca agrego algo mas'
		await fs.promises.appendFile('./fsPromises.txt', 'Aca agrego algo mas');

		// Guardo en la variable contenido, la lectura del archivo.
		contenido = await fs.promises.readFile('./fsPromises.txt', 'utf-8');
		console.log(contenido); // Imprimo en pantalla

		// Elimino el archivo
		await fs.promises.unlink('./fsPromises.txt');
	} catch (err) {
		// Imprimo un error en pantalla
		console.log('Algo malio sal');
	}
};

// Ejecuto la funcion asincronica
opAsync();
