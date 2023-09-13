import coursesService from "../services/courses.service.js";

export default class CoursesController {
    constructor() {
        this.service = coursesService;
    }

    async getAllCourses(req, res) {
        let courses = await this.service.getCourses();
        res.send({ status: "success", payload: courses })
    }

    async addCourse(req, res) {
        const { title, description } = req.body;
        let newCourse = {
            title,
            description,
            users: [],
            teacher: 'sin asignar'
        }
        const result = await this.service.saveCourse(newCourse);
        res.send({ status: "success", payload: result });
    }
}