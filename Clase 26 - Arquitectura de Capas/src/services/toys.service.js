export default class ToysService {
	constructor(dao) {
		this.dao = dao;
	}

	getToys() {
		return this.dao.getToys();
	}

	addToy(toy) {
		this.dao.addToy(toy);
	}

	deleteToy(id) {
		this.dao.deleteToy(id);
	}

	updateToy(id, ntoy) {
		this.dao.updateToy(id, ntoy);
	}

	getToyByName(name) {
		const toys = this.dao.getToys();
		return toys.find((toy) => toy.name === name);
	}
}
