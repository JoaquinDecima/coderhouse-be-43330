import UserRepository from "./repositories/user.repository.js";
import UserMySQLRepository from "./repositories/usermysql.repository.js";

export default class LoginUserDTO {
    service;
    constructor() {
        this.service = new UserMySQLRepository();
    }


    async login(user) {
        //codigo de login
        const users = await this.service.get({ email: user.email });
        if (users.length === 0) {
            throw new Error("No existe el usuario");
        }
        const userFound = users[0];
        if (userFound.password !== user.password) {
            throw new Error("Contraseña incorrecta");
        }
        return userFound;
    }


}