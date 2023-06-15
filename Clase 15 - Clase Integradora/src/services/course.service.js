import { courseModel } from '../models/course.model.js';
import { studentService } from './student.service.js';

class CouseService {
	constructor() {
		this.model = courseModel;
	}

	async addCouse(course) {
		course.students = [];
		return await this.model.create(course);
	}

	async getAllCourses() {
		return await this.model.find().lean();
	}

	async addStudientCouse(courseId, studientId) {
		const course = await this.model.findOne({ _id: courseId });
		const student = await studentService.getStudientByID(studientId);
		course.students.push(student);
		return await course.save();
	}
}

export const courseService = new CouseService();
