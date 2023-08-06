import UserDAO from "../dao/user.dao.js";

export default class UserRepository {
    dao;
    constructor() {
        this.dao = new UserDAO();
    }

    async add(user) {
        const newUser = await this.dao.create(user);
        return newUser;
    }

    async get(query = {}) {
        const users = await this.dao.find(query);
        return users;
    }

    async getByEmail(email) {
        const user = await this.dao.findByEmail(email);
        return user;
    }
}