// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

// Creo la clase UserManager
class UserManager {
	// Seteo el constructor
	constructor() {
		// Si no existe ./users.json
		if (!fs.existsSync('./users.json')) {
			// escribo el archivo de forma sincronica con un array vacio
			fs.writeFileSync('./users.json', JSON.stringify([]));
		}
	}

	/**
	 * Permite agregar un usuario persistente
	 * @param {object} user Usuario a agregar en el array
	 */
	async addUser(user) {
		// Intento...
		try {
			// Obtengo los usuarios actuales
			const actualUsers = await this.getUsers();
			// Agrego el nuevo usuario
			actualUsers.push(user);

			// Escribo nuevamente le archivo ./users.json
			await fs.promises.writeFile(
				'./users.json',
				JSON.stringify(actualUsers) // Transformo el array en string
			);
		} catch (err) {
			// Si hay error imprimo el error en consola
			console.log('No puedo agregar usuarios');
		}
	}

	/**
	 * Permite obtener los usuarios
	 * @returns Un array con los usuarios
	 */
	async getUsers() {
		// Intento...
		try {
			// Guardo en actualUsers el contenido de ./users.json
			const actualUsers = await fs.promises.readFile(
				'./users.json',
				'utf-8'
			);
			// Retorno actualUsers parseado
			return JSON.parse(actualUsers);
		} catch (err) {
			// Si hay error imprimo el error en consola
			console.log('No puedo darte usuarios');
		}
	}
}

// Creo una instancia de User Manger
const users = new UserManager();

// Creo una funcion asincronica
const test = async () => {
	// intento
	try {
		// Agregar usuario
		await users.addUser({
			nombre: 'Pato',
			apellido: 'Decima',
			edad: 27,
			curso: 43330,
		});
		// Agregar usuario
		await users.addUser({
			nombre: 'Julian',
			apellido: 'Fuentes',
			edad: 23,
			curso: 43330,
		});

		// Imprimo los usuarios que administra
		console.log(await users.getUsers());
	} catch (err) {
		// Si hay error imprimo el error en consola
		console.log('Salio mal el Test');
	}
};

// Ejecuto el test
test();
