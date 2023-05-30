import { studentModel } from '../models/student.model.js';

class StudentService {
	constructor() {
		this.model = studentModel;
	}

	async getAllStudents() {
		return await this.model.find().lean();
	}

	async addStudent(student) {
		return await this.model.create(student);
	}

	async removeStudent(studentId) {
		return this.model.deleteOne({ _id: studentId });
	}

	async getStudientByID(studentId) {
		return await this.model.findOne({ _id: studentId });
	}
}

export const studentService = new StudentService();
