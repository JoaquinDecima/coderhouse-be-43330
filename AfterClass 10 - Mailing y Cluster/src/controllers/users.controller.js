import coursesService from "../services/courses.service.js";
import userService from "../services/user.service.js";
import MailingService from "../services/mail.service.js";

export default class UsersController {

    constructor() {
        this.usersService = userService;
        this.coursesService = coursesService;
        this.mailingService = new MailingService();
    }

    async getAllUsers(req, res) {
        let users = await this.usersService.getUsers();
        if (!users) return res.status(500).send({ status: "error", error: "Couldn't get users due to internal error" })
        res.send({ status: "success", payload: users })
    }

    async addUser(req, res) {
        let { first_name, last_name, dni, email, birthDate, gender } = req.body;
        if (!first_name || !last_name || !dni || !email || !birthDate) return res.status(400).send({ status: "error", error: "Incomplete values" })
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
        if (!result) return res.status(500).send({ status: "success", payload: result })
        res.send({ status: "success", payload: result })
    }

    async addUserToCourse(req, res) {
        const { uid, cid } = req.params;
        const course = await this.coursesService.getBy({ _id: cid });
        if (!course) return res.status(404).send({ status: "error", error: "Course not found" })
        const user = await this.usersService.getBy({ _id: uid });
        if (!user) return res.status(404).send({ status: "error", error: "User not found" });
        //checamos si el usuario ya tenía ese curso registrado
        let courseExists = user.courses.some(c => c._id.toString() === cid);
        if (courseExists) return res.status(400).send({ status: "error", error: "The user is already registered in this course" });
        //Si todo está bien, insertamos de ambos lados.
        user.courses.push(course._id);
        course.students.push(user._id);
        await this.usersService.updateUser(uid, user);
        await this.coursesService.updateCourse(cid, course);
        //Enviamos el correo
        const mailOptions = {
            from: 'AfterClass <jdecima@vasak.net.ar>',
            to: 'staff@laempresa.net',
            subject: `Nuevo usuario registrado en el curso ${course.name}`,
            html: `<h1>Se ha registrado un nuevo usuario en el curso ${course.name}</h1>
            <p>El usuario ${user.first_name} ${user.last_name} se ha registrado en el curso ${course.name}</p>
            <p>Para ver el detalle del curso, ingrese a la plataforma</p>`
        };
        this.mailingService.sendMail(mailOptions);
        res.send({ status: "success", message: "User added to course" })
    }
}