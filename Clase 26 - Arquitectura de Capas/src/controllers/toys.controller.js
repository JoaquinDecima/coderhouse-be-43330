import ToysService from '../services/toys.service.js';
import toysDAO from '../daos/toys.dao.js';

class ToysController {
	constructor() {
		this.service = new ToysService(toysDAO);
	}

	getToys() {
		return this.service.getToys();
	}

	addToy(toy) {
		const otoy = this.service.getToyByName(toy.name);
		if (otoy) {
			throw new Error('Toy already exists');
		}
		this.service.addToy(toy);
		return this.service.getToyByName(toy.name);
	}

	deleteToy(id) {
		this.service.deleteToy(id);
	}

	updateToy(id, ntoy) {
		this.service.updateToy(id, ntoy);
	}
}

const toysController = new ToysController();

export default toysController;
