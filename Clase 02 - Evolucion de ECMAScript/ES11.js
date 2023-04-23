let prueba = 0;

// El operador Logico OR toma al 0 como false
let variableOR = prueba || 'Sin valor';
console.log(variableOR);

// El operador nullish entiende que 0 es un valor
let variableNullish = prueba ?? 'Sin Valor';
console.log(variableNullish);

class Persona {
	#fullName;

	/**
	 * Constructor
	 * @param {string} name Nombre de la Persona
	 * @param {string} lastName Apellido de la Persona
	 */
	constructor(name, lastName) {
		this.name = name;
		this.lastName = lastName;
		this.#fullName = `${name} ${lastName}`;
	}

	// Retorna el valor de #fullName
	getFullName() {
		return this.#fullName;
	}

	/**
	 *
	 * @param {string} fullName Nuevo Fullname
	 */
	setFullname(fullName) {
		this.#privado(); // Ejecuto un metodo al que solo tiene acceso this
		this.#fullName = fullName; // Dentro del metodo si puedo redefinir el valor de #fullName
	}

	// Defino un metodo privado
	#privado() {
		console.log('Esto es un metodo privado');
	}
}

const instance = new Persona('pepe', 'zanches');

console.log(instance.getFullName());
instance.setFullname('Pepe Juan Zanchez');
console.log(instance.getFullName());
