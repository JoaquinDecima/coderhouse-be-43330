import { logger } from "../config/logger.js";

export default class UserRepository {
    constructor(dao) {
        this.dao = dao
    }

    async getUsers() {
        return await this.dao.getAll();
    }

    async getBy(params) {
        logger.debug(`Getting user by ${JSON.stringify(params)}`)
        return await this.dao.getBy(params);
    }

    async createUser(user) {
        logger.debug(`Creating user: ${JSON.stringify(user)}`)
        return await this.dao.save(user);
    }

    async updateUser(id, user) {
        logger.debug(`Updating user ${id}: ${JSON.stringify(user)}`)
        return await this.dao.update(id, user);
    }
}