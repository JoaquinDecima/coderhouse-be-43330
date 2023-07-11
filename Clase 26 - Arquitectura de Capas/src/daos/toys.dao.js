class ToysDAO {
	constructor() {
		this.toys = [];
	}

	getToys() {
		return this.toys;
	}

	addToy(toy) {
		this.toys.push(toy);
	}

	deleteToy(id) {
		this.toys = this.toys.filter((toy) => toy.id !== id);
	}

	updateToy(id, ntoy) {
		this.toys = this.toys.map((toy) => {
			if (toy.id === id) {
				return { ...toy, ...ntoy };
			}
			return toy;
		});
	}
}

const toysDAO = new ToysDAO();

export default toysDAO;
