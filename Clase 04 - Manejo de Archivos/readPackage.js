// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

// Defino una funcion asincronica
const opAsync = async () => {
	// Intento...
	try {
		// Espero la lectura del archivo './package.json'
		const package = await fs.promises.readFile('./package.json', 'utf-8');

		// Creo un objeto
		const info = {
			file: JSON.stringify(package), // La informacion del package como string
			object: JSON.parse(package), // La informacion del package como object
		};

		// Espero la escritora del archivo './info.json'
		await fs.promises.writeFile('./info.json', JSON.stringify(info));
		console.log(info); // Imprimo en pantalla
	} catch (err) {
		// Si hay error imprimo error en pantall
		console.log(`ERROR al procesar: ${err}`);
	}
};

// Ejecuto la operacion Asincrona
opAsync();
