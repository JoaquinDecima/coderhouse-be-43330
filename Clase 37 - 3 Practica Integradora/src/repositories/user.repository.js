export default class UserRepository {
    constructor(dao) {
        this.dao = dao
    }

    async getUsers() {
        return await this.dao.getAll();
    }

    async getBy(params) {
        return await this.dao.getBy(params);
    }

    async createUser(user) {
        return await this.dao.save(user);
    }

    async updateUser(id, user) {
        return await this.dao.update(id, user);
    }
}