import { userModel } from "../models/users.js"
import { logger } from "../../config/logger.js";

export default class Users {
    constructor() {
        logger.info(`Working users with Database persistence in mongodb`)
    }
    getAll = async () => {
        let users = await userModel.find().populate('courses');
        return users.map(user => user.toObject())
    }
    save = async (user) => {
        let result = await userModel.create(user);
        return result;
    }
    getBy = async (params) => {
        let result = await userModel.findOne(params).populate('courses').lean();
        return result;
    }
    update = async (id, user) => {
        delete user._id;
        let result = await userModel.updateOne({ _id: id }, { $set: user })
        return result;
    }
}