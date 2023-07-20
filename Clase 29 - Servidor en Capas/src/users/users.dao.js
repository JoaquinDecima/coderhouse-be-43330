import usersModel from "./users.model.js";

export default class User {
    getUsers = async () => {
        try{
            return await usersModel.find({});
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    getUserById = async (id) => {
        try{
            return await usersModel.findById(id);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    createUser = async (user) => {
        try{
            return await usersModel.create(user);
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}