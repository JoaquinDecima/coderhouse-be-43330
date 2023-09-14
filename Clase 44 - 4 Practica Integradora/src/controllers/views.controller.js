import userService from "../services/user.service.js";
import coursesService from "../services/courses.service.js";

export const home = async (req, res) => {
    let users = await userService.getUsers();
    req.logger.trace(users);
    res.render('users', { users })
}

export const courses = async (req, res) => {
    let courses = await coursesService.getCourses();
    req.logger.trace(courses);
    res.render('courses', { courses })
}