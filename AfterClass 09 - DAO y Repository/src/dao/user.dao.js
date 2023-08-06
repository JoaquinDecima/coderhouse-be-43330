import { userModel } from '../models/user.model.js';

export default class UserDAO {
	model;
	constructor() {
		this.model = userModel;
	}

	async create(user) {
		const newUser = await this.model.create(user);
		return newUser;
	}

	async find(query = {}) {
		const users = await this.model.find(query);
		return users;
	}

	async findByEmail(email) {
		const user = this.find({ email });
		return user;
	}

}