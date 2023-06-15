class UserService {
	#users;
	constructor() {
		this.#users = [
			{
				name: 'Juan',
				mail: 'Juan@gmail.com',
				pass: '1234',
			},
		];
	}

	addUser(user) {
		this.#users.push(user);
	}

	getUsers() {
		return this.#users;
	}
}
export const userService = new UserService();
