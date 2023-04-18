// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

/* Escribo el archivo './fsSync.txt' poniendo dentro
 * 'Estoy escribiendo un Archivo \n' de manera sincronica
 */
fs.writeFileSync('./fsSync.txt', 'Estoy escribiendo un Archivo \n');

/* Pregunto de manera sincronica si existe el archivo
 * './fsSync.txt', esto retorna un booleano
 */
if (fs.existsSync('./fsSync.txt')) {
	// Guardo en la variable contenido, la lectura del archivo.
	let contenido = fs.readFileSync('./fsSync.txt', 'utf-8');
	console.log(contenido); // Imprimo en pantalla

	// Agrego al archivo './fsSync.txt' el texto 'Aca agrego algo mas'
	fs.appendFileSync('./fsSync.txt', 'Aca agrego algo mas');

	// Guardo nuevamente en la variable contenido, la lectura del archivo.
	contenido = fs.readFileSync('./fsSync.txt', 'utf-8');
	console.log(contenido); // Imprimo en pantalla

	// Elimino el archivo
	fs.unlinkSync('./fsSync.txt');
}
