import UserRepository from "../repositories/user.repository.js"
import config from "../config/enviroment.config.js"

const userService = new UserRepository(config.userDAO);

export default userService