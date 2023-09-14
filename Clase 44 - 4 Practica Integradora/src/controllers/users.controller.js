import coursesService from "../services/courses.service.js";
import userService from "../services/user.service.js";

export default class UsersController {

    constructor() {
        this.usersService = userService;
        this.coursesService = coursesService;
    }

    async getAllUsers(req, res) {
        let users = await this.usersService.getUsers();
        if (!users) {
            req.logger.error("Couldn't get users due to internal error")
            return res.status(500).send({ status: "error", error: "Couldn't get users due to internal error" })
        }
        res.send({ status: "success", payload: users })
    }

    async addUser(req, res) {
        let { first_name, last_name, dni, email, birthDate, gender } = req.body;
        req.logger.debug("Creating user: " + JSON.stringify(req.body))
        if (!first_name || !last_name || !dni || !email || !birthDate) {
            req.logger.error("Incomplete values " + JSON.stringify(req.body) + " were sent to the server")
            return res.status(400).send({ status: "error", error: "Incomplete values" })
        }
        //Muy importante! La inserción actual de la fecha de nacimiento está pensada para hacerse en el formato
        // MM - DD - YYYY. De otra forma, arrojará un error. puedes enseñar a tus estudiantes el parseo que tú necesites
        //para llegar a este formado, por defecto, se espera que se mande así desde postman.
        let result = await this.usersService.saveUser({
            first_name,
            last_name,
            email,
            dni,
            birthDate,
            gender
        })
        if (!result) {
            req.logger.error("Couldn't create user due to internal error: " + result)
            return res.status(500).send({ status: "error", payload: result })
        }
        req.logger.info("User created successfully: " + result._id)
        res.send({ status: "success", payload: result })
    }

    async addUserToCourse(req, res) {
        const { uid, cid } = req.params;
        const course = await this.coursesService.getBy({ _id: cid });
        if (!course) {
            req.logger.error("Course not found: " + cid)
            return res.status(404).send({ status: "error", error: "Course not found" })
        }
        const user = await this.usersService.getBy({ _id: uid });
        if (!user) {
            req.logger.error("User not found: " + uid)
            return res.status(404).send({ status: "error", error: "User not found" })
        };
        //checamos si el usuario ya tenía ese curso registrado
        let courseExists = user.courses.some(c => c._id.toString() === cid);
        if (courseExists) {
            req.logger.error("The user " + uid +" is already registered in this course " + cid)
            return res.status(400).send({ status: "error", error: "The user is already registered in this course" })
        };
        //Si todo está bien, insertamos de ambos lados.

        user.courses.push(course._id);
        course.students.push(user._id);
        req.logger.trace("Updating user " + uid)
        await this.usersService.updateUser(uid, user);
        req.logger.trace("Updating course " + cid)
        await this.coursesService.updateCourse(cid, course);
        req.logger.info("User " + uid + " added to course " + cid)
        res.send({ status: "success", message: "User added to course" })
    }
}