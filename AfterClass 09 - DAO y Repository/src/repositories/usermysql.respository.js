import UserMySQLDAO from "../dao/usermysql.dao.js";

export default class UserMySQLRepository {
    dao;
    constructor() {
        this.dao = new UserMySQLDAO();
    }

    async add(user) {
        const newUser = await this.dao.insert(user);
        return newUser;
    }

    async get(query = {}) {
        const users = await this.dao.select(query);
        return users;
    }

    async getByEmail(email) {
        const user = await this.dao.select({ email });
        return user;
    }
}