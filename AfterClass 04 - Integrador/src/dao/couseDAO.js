import courseModel from './models/courses.model.js';
import userModel from './models/user.model.js';

class CourseDAO {
	constructor() {
		this.model = courseModel;
	}

	async getAll() {
		return await this.model.find();
	}

	async findCourseById(id) {
		return await this.model.findById(id).populate('students.student');
	}

	async addCourse(course) {
		return await this.model.create(course);
	}
}

export default CourseDAO;
