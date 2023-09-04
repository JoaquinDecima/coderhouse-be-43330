import userService from "../services/user.service.js";
import coursesService from "../services/courses.service.js";

export const home = async (req, res) => {
    let users = await userService.getUsers();
    console.log(users);
    res.render('users', { users })
}

export const courses = async (req, res) => {
    let courses = await coursesService.getCourses();
    console.log(courses);
    res.render('courses', { courses })
}