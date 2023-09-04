import { studientModel } from '../models/studient.model.js';

class StudientService {
	constructor() {
		this.model = studientModel;
	}

	async getAll() {
		return await this.model.find();
	}

	async addStudient(studient) {
		return await this.model.create(studient);
	}

	async updateStudient(uid, studient) {
		return await this.model.updateOne({ _id: uid }, studient);
	}

	async deleteStudient(uid) {
		return await this.model.deleteOne({ _id: uid });
	}
}

const studientService = new StudientService();

export default studientService;
