import userModel from './models/user.model.js';
import courseModel from './models/courses.model.js';

class UserDAO {
	constructor() {
		this.model = userModel;
	}

	async getAll() {
		return await this.model.find();
	}

	async findUserById(id) {
		return await this.model.findById(id).populate('courses.course');
	}

	async addUser(user) {
		return await this.model.create(user);
	}
}

export default UserDAO;
