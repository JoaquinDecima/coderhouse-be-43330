import CoursesRepository from "../repositories/courses.repository.js";
import config from "../config/enviroment.config.js";

const coursesService = new CoursesRepository(config.courseDAO);

export default coursesService;