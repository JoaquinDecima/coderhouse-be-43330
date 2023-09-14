import coursesModel from "../models/courses.js";
import { logger } from "../../config/logger.js";

export default class Courses {
    constructor() {
        logger.info("Working courses with database in mongodb")
    }
    getAll = async () => {
        //Profe, los cursos son tomados a partir de un lean para su mapeo en handlebars, puedes hacer un map
        //solamente en caso de que así lo desees (como se muestra en el Manager de usuarios);
        let courses = await coursesModel.find().lean().populate('students');
        return courses;
    }
    getById = async (id) => {
        let course = await coursesModel.findOne({ _id: id }).populate('students');
        return course;
    }
    save = async course => {
        let result = await coursesModel.create(course);
        return result;
    }
    update = async (id, course) => {
        delete course._id;
        let result = await coursesModel.updateOne({ _id: id }, { $set: course })
        return result;
    }
}