import studentsModel from '../models/students.model.js';

class StudentsServcie {
	constructor() {
		this.model = studentsModel;
	}

	async getAllStudentsForView(limit = 100000, page = 1, gender = false) {
		var filter = {};

		if (gender) {
			filter = { gender };
		}

		return this.model.paginate(filter, { lean: true, page, limit });
	}
}

const studentsService = new StudentsServcie();
export default studentsService;
