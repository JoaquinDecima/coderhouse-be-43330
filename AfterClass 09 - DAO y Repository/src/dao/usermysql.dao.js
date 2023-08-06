import { userModel } from '../models/user.model.js';

export default class UserMySQLDAO {
    model;
    constructor() {
        this.model = userModel;
    }

    async insert(user) {
        // codigo que inserta en mysql
        return user;
    }

    async select(query = {}) {
        // Codigo que busca en mysql
        return users;
    }

    async update(query = {}) {
        // Codigo que actualzia en mysql
        return users;
    }

}