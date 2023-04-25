// Llamo a la libreria fs y la guardo en variable fs
import fs from 'fs';

// Creo la clase UserManager
export default class UserManager {
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
		// Importo la libreria crypto
		const { createHash } = await import('node:crypto');
		// Desestructuro el objeto user y obtengo el password
		let { password, ...rest } = user;
		// Creo un nuevo objeto con el password hasheado
		let newUser = {
			...rest,
			password: createHash('sha256')
				.update(password, 'utf-8')
				.digest('hex'),
		};
		// Intento...
		try {
			// Obtengo los usuarios actuales
			const actualUsers = await this.getUsers();
			// Agrego el nuevo usuario
			actualUsers.push(newUser);

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
	 * Permite validar un usuario
	 * @param {string} nombre Nombre del usuario
	 * @param {string} password Password del usuario
	 * @returns null
	 */
	async validateUser(nombre, password) {
		// Importo la libreria crypto
		const { createHash } = await import('node:crypto');
		// Obtengo el usuario
		let user = await this.getUser(nombre);
		// Hasheo el password
		let hashpass = createHash('sha256')
			.update(password, 'utf-8')
			.digest('hex');
		// Comparo el password hasheado con el password hasheado del usuario
		if (user.password == hashpass) {
			// Si son iguales "retorno el usuario"
			console.log('Usuario logeado');
		} else {
			// Si no son iguales "imprimo un error"
			console.log('Error de auth: Sos un estafador');
		}
	}

	// TODO: Esta funcion no sirve con nombres repetidos
	/**
	 * Permite obtener un usuario por nombre
	 * @param {string} nombre Nombre del usuario
	 * @returns Un objeto con el usuario
	 */
	async getUser(nombre) {
		// Obtengo los usuarios
		let users = await this.getUsers();
		// Filtro los usuarios por nombre
		let user = users.filter((user) => user.nombre === nombre);
		// Retorno el primer usuario
		return user[0];
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

	async updateUser(nombre, edit) {
		let edited = false; // Flag para saber si se edito o no
		let users; // Variable para guardar los usuarios
		try {
			users = await this.getUsers();
			users.map((user) => {
				if (user.nombre === nombre) {
					user = { ...user, ...edit };
					edited = true;
				}
			});

			if (edited) {
				console.log('Usuario actualizado');
				await fs.promises.writeFile(
					'./users.json',
					JSON.stringify(users)
				);
			} else {
				console.log('No se encontro el usuario');
			}
		} catch (err) {
			console.log('No puedo actualizar usuarios');
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
			password: '1234',
			curso: 43330,
		});
		// Agregar usuario
		await users.addUser({
			nombre: 'Julian',
			apellido: 'Fuentes',
			edad: 23,
			password: '12345',
			curso: 43330,
		});

		// Imprimo los usuarios que administra
		console.log(await users.getUsers());
		await users.validateUser('Pato', '1234');
		await users.validateUser('Pato', '12345');
	} catch (err) {
		// Si hay error imprimo el error en consola
		console.log('Salio mal el Test');
		console.log(err);
	}
};

// Ejecuto el test
// test();
