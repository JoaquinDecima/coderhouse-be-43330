class UserController {
	constructor() {
		this.users = [];
	}

	getUsers() {
		return this.users;
	}

	addUser(user) {
		this.users.push(user);
	}

	deleteUser(id) {
		this.users = this.users.filter((user) => user.id !== id);
	}

	updateUser(id, nuser) {
		this.users = this.users.map((user) => {
			if (user.id === id) {
				return { ...user, ...nuser };
			}
			return user;
		});
	}
}

const userController = new UserController();

export default userController;
