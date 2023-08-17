import Courses from "../dao/dbManagers/courses";
import Users from "../dao/dbManagers/users";

export default class UsersController {

    constructor() {
        this.usersManager = new Users();
        this.coursesManager = new Courses();
    }

    async getAllUsers(req, res) {
        let users = await this.usersManager.getAll();
        if (!users) return res.status(500).send({ status: "error", error: "Couldn't get users due to internal error" })
        res.send({ status: "success", payload: users })
    }

    async addUser(req, res) {
        let { first_name, last_name, dni, email, birthDate, gender } = req.body;
        if (!first_name || !last_name || !dni || !email || !birthDate) return res.status(400).send({ status: "error", error: "Incomplete values" })
        //Muy importante! La inserción actual de la fecha de nacimiento está pensada para hacerse en el formato
        // MM - DD - YYYY. De otra forma, arrojará un error. puedes enseñar a tus estudiantes el parseo que tú necesites
        //para llegar a este formado, por defecto, se espera que se mande así desde postman.
        let result = await this.usersManager.saveUser({
            first_name,
            last_name,
            email,
            dni,
            birthDate,
            gender
        })
        if (!result) return res.status(500).send({ status: "success", payload: result })
        res.send({ status: "success", payload: result })
    }

    async addUserToCourse(req, res) {
        const { uid, cid } = req.params;
        const course = await this.coursesManager.getById(cid);
        if (!course) return res.status(404).send({ status: "error", error: "Course not found" })
        const user = await this.usersManager.getBy({ _id: uid });
        if (!user) return res.status(404).send({ status: "error", error: "User not found" });
        //checamos si el usuario ya tenía ese curso registrado
        let courseExists = user.courses.some(c => c._id.toString() === cid);
        if (courseExists) return res.status(400).send({ status: "error", error: "The user is already registered in this course" });
        //Si todo está bien, insertamos de ambos lados.
        user.courses.push(course._id);
        course.students.push(user._id);
        await this.usersManager.updateUser(uid, user);
        await this.coursesManager.updateCourse(cid, course);
        res.send({ status: "success", message: "User added to course" })
    }
}