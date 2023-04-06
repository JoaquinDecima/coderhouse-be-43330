// Creo la Clase Persona
class Persona {
	// Defino una variable ESTATICA que le pertenece a PERSONA
	static especie = 'Humano';

	/**
	 * Constructor
	 * @param {String} nombre Nombre de la Persona
	 */
	constructor(nombre) {
		// Cada instancia conoce su nombre
		this.nombre = nombre;
	}

	sayName() {
		// Cada instancia puede decir su nombre
		console.log(this.nombre);
	}

	sayEspecie() {
		// Cada instancia puede decir la Especie de Persona
		// Aunque no sea un estado interno de la instancia
		console.log(Persona.especie);
	}
}

// Creo una instancia de Persona en la constante pepe
// Dicha instancia toma como nombre Pepe
const pepe = new Persona('Pepe');

// Creo una instancia de Persona en la constante jose
// Dicha instancia toma como nombre Maria
const jose = new Persona('Maria');

pepe.sayName();
pepe.sayEspecie();
jose.sayName();
jose.sayEspecie();
