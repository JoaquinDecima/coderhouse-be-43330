// Creo la Clase Contador
class Contador {
	// Creo la Variable Estatica contadorGrupal
	// para contado
	static contadorGrupal = 0;

	/**
	 *
	 * @param {String} name Nombre del responsable del contador
	 */
	constructor(name) {
		// Cada instancia sabe el nombre de su responsable
		this.responsable = name;
		// Cada instancia tiene un contador individual que inicia en 0
		this.contadorIndividual = 0;
	}

	// Defino el Metodo contar
	contar() {
		// Incremento en 1 el contador individual
		this.contadorIndividual += 1;
		// Incremento en 1 el contador grupal
		Contador.contadorGrupal += 1;
	}

	// Defino el Metodo getResponsable
	getResponsable() {
		return this.responsable;
	}

	// Defino el Metodo getCuentaIndividual
	getCuentaIndividual() {
		return this.contadorIndividual;
	}

	// Defino el Metodo getCuentaGlobal
	getCuentaGlobal() {
		return Contador.contadorGrupal;
	}
}

// Creo una instancia de Contador en la constante pepe
// Dicha instancia toma como nombre Pepe
const pepe = new Contador('Pepe');

// Creo una instancia de Contador en la constante jose
// Dicha instancia toma como nombre Maria
const jose = new Contador('Maria');

// Imprimo los estados internos y globales de pepe y jose
// a modo de chequeo
console.log(pepe.getCuentaGlobal());
console.log(pepe.getCuentaIndividual());
console.log(jose.getCuentaGlobal());
console.log(jose.getCuentaIndividual());

// Pepe cuenta 2 veces
pepe.contar();
pepe.contar();

// Imprimo estado global e individual de pepe
console.log(pepe.getCuentaGlobal()); // 2
console.log(pepe.getCuentaIndividual()); // 2

// Maria cuenta 4 veces
jose.contar();
jose.contar();
jose.contar();
jose.contar();

// Imprimo estado global e individual de jose
console.log(jose.getCuentaGlobal()); // 6
console.log(jose.getCuentaIndividual()); // 4
