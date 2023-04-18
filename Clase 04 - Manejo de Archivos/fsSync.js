const fs = require('fs');

fs.writeFileSync('./files/fsSync.txt', 'Estoy escribiendo un Archivo \n');

if (fs.existsSync('./files/fsSync.txt')) {
	let contenido = fs.readFileSync('./files/fsSync.txt', 'utf-8');
	console.log(contenido);

	fs.appendFileSync('./files/fsSync.txt', 'Aca agrego algo mas');

	contenido = fs.readFileSync('./files/fsSync.txt', 'utf-8');
	console.log(contenido);

	fs.unlinkSync('./files/fsSync.txt');
}
