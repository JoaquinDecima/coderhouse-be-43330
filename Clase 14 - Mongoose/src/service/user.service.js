import { userModel } from '../models/user.model.js';

class UserService {
	constructor() {
		this.model = userModel;
	}

	async getAll() {
		return await this.model.find();
	}

	async addUser(user) {
		if (!user.name || !user.lastname || !user.email) {
			throw new Error('Missing required fields');
		}
		return await this.model.create(user);
	}

	async updateUser(uid, user) {
		if (!uid) {
			throw new Error('Missing required fields');
		}
		return await this.model.updateOne({ _id: uid }, user);
	}

	async deleteUser(uid) {
		return this.model.deleteOne({ _id: uid });
	}
}

const userService = new UserService();

export default userService;
