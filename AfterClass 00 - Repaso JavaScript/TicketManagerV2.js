/*
 * Reimplementamos el ticket manager pero ahora los eventos no pueden
 * tener el mismo nombre a no ser que sean una gira
 */

class TicketManager {
	// Defino atributos privados
	#precioBaseGanancia = 0.15;
	#id = 0;

	constructor() {
		this.eventos = [];
	}

	getEventos() {
		return this.eventos;
	}

	/**
	 * Permite agregar un evento a la lista de eventos pero chequea que
	 * no se repitan los nombres
	 * @param {string} nombre Nombre del Evento
	 * @param {string} lugar Lugar del Evento
	 * @param {number} precio Precio del evento
	 * @param {number} capacidad Capacidad del evento
	 * @param {Date} fecha Fecha del evento
	 */
	agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
		let filtro = this.eventos.filter((event) => event.nombre === nombre);
		if (filtro.length > 0) {
			console.log('El nombre del evento ya existe');
			return;
		}

		const evento = {
			nombre,
			lugar,
			precio: precio + precio * this.#precioBaseGanancia, //Al precio le incremento el porcentaje
			capacidad,
			fecha,
			participantes: [], // Al crear un evento no tendra participantes
		};

		// le agrego el ID al evento
		evento.id = this.#getID();

		// Agrego el evento a la lista de eventos
		this.eventos.push(evento);
	}

	// Metodo privado que incrementa en 1 el valor de ID y lo retorna
	// permite evitar id repetidos
	// Es privado para que nadie pueda utilizarlo y afectar la correlatividad de los id
	#getID() {
		// Incremento en 1 el valor de id
		this.#id++; // Otra forma de incrementar el id
		return this.#id;
	}

	/**
	 * Permite agregar un participante a un evento
	 * @param {number} idEvento ID del evento
	 * @param {number} idUsuario ID del Usuario
	 * @returns void
	 */
	agregarUsuario(idEvento, idUsuario) {
		// Busco el indice del evento que coincida con el idEvento
		const eventoIndex = this.eventos.findIndex(
			(evento) => evento.id === idEvento
		);

		// Si el indice es -1 es porque no hay evento con ese ID
		if (eventoIndex === -1) {
			console.log('No existe el evento');
			return; // Este return impide que se siga ejecutando el codigo de abajo
		}

		// Obtengo el evento mediante su indice
		const evento = this.eventos[eventoIndex];

		// Si el participante ya esta en el evento no lo agrego
		if (evento.participantes.includes(idUsuario)) {
			console.log('El usuario ya esta agregado');
			return; // Este return impide que se siga ejecutando el codigo de abajo
		}

		// Agrego el aprticipante
		evento.participantes.push(idUsuario);
	}

	/**
	 * Permite repetir un evento en otro lugar u otra fecha
	 * @param {number} idEvento ID del evento que se repite
	 * @param {string} nuevaLocalidad Lugar de la nueva repeticion
	 * @param {Date} nuevaFecha Decha de la nueva Repeticion
	 * @returns
	 */
	ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
		// Busco el indice del evento que coincida con el idEvento
		const eventoIndex = this.eventos.findIndex(
			(evento) => evento.id === idEvento
		);

		// Si el indice es -1 es porque no hay evento con ese ID
		if (eventoIndex === -1) {
			console.log('No existe el evento');
			return; // Este return impide que se siga ejecutando el codigo de abajo
		}

		// Obtengo el evento mediante su indice
		const evento = this.eventos[eventoIndex];

		// Creo el nuevo evento con los atributos de evento
		// Pero agrego (o piso) nuevos datos
		const newEvento = {
			...evento,
			lugar: nuevaLocalidad ?? evento.lugar, // Uso nueva localidad si la envian
			fecha: nuevaFecha ?? evento.fecha, // Uso nueva fecha si la envian
			id: this.#getID(), // Utilizo nuevo ID
			participantes: [], // "Vacio" la lista de participantes
		};

		// Agrego el nuevo evento a la lista de eventos
		this.eventos.push(newEvento);
	}
}

// Pruebas
const ticketManager = new TicketManager();
ticketManager.agregarEvento('Evento Coder', 'Portugal', 200, 50);
ticketManager.agregarUsuario(1, 1);
ticketManager.agregarUsuario(1, 685);
ticketManager.agregarEvento('Evento Coder', 'Portugal', 200, 50);
ticketManager.agregarEvento('Evento Coder #2', 'Portugal', 200, 50);
ticketManager.agregarUsuario(2, 927);
ticketManager.agregarUsuario(2, 10);
ticketManager.agregarUsuario(2, 859);

console.log(ticketManager.getEventos());

// Diferencia entre Clase y Objeto instancia de clase
console.log(`CLASS: ${TicketManager}`);
console.log(`INSTANCIA: ${ticketManager}`);
