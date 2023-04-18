const fs = require('fs');

fs.writeFile(
	'./files/fsSync.txt',
	'Estoy escribiendo un Archivo con Callback \n',
	(err) => {
		if (err) return console.log('No se escribir');

		fs.readFile('./files/fsSync.txt', 'utf-8', (err, contenido) => {
			if (err) return console.log('No se Leer');
			console.log(contenido);

			fs.appendFile(
				'./files/fsSync.txt',
				'Aca agrego algo mas',
				(err) => {
					if (err) return console.log('No se escribir');

					fs.readFile(
						'./files/fsSync.txt',
						'utf-8',
						(err, contenido) => {
							if (err) return console.log('No se Leer');
							console.log(contenido);

							fs.unlink('./files/fsSync.txt', (err) => {
								if (err) return console.log('No se Borrar');
							});
						}
					);
				}
			);
		});
	}
);
