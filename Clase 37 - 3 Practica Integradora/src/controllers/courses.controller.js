
import Courses from '../dao/dbManagers/courses.js';

export default class CoursesController {
    constructor() {
        this.coursesManager = new Courses();
    }

    async getAllCourses(req, res) {
        let courses = await this.coursesManager.getAll();
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
        const result = await this.coursesManager.saveCourse(newCourse);
        res.send({ status: "success", payload: result });
    }
}