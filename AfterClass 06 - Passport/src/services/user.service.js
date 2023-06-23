import userModel from '../models/user.model.js';

class UserService {
	constructor() {
		this.model = userModel;
	}

	async getAll() {
		return await this.model.find();
	}

	async getByEmail(email) {
		return await this.model.findOne({ email: email });
	}

	async createUser(userData) {
		return await this.model.create(userData);
	}

	async getUserById(id) {
		return await this.model.findById(id);
	}
}

const userService = new UserService();
export default userService;
