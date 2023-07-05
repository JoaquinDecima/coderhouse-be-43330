import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt';

class UserService {
	constructor() {
		this.model = userModel;
	}

	async getAll() {
		return await this.model.find();
	}

	async create(user) {
		const password = user.password;
		const hash = bcrypt.hashSync(password, 2);
		user.password = hash;
		return await this.model.create(user);
	}

	async getByEmail(email) {
		return await this.model.findOne({ email });
	}

	async getById(id) {
		return await this.model.findById(id);
	}
}

const userService = new UserService();

export default userService;
