import Users from '../dao/dbManagers/users.js';
import Courses from '../dao/dbManagers/courses.js';

const usersManager = new Users();
const coursesManager = new Courses();

export const home = async (req, res) => {
    let users = await usersManager.getAll();
    console.log(users);
    res.render('users', { users })
}

export const courses = async (req, res) => {
    let courses = await coursesManager.getAll();
    console.log(courses);
    res.render('courses', { courses })
}