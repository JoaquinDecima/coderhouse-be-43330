import UserDAO from './dao/userDAO.js';
import CourseDAO from './dao/couseDAO.js';
import mongoose from 'mongoose';

const userDAO = new UserDAO();
const courseDAO = new CourseDAO();

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

// const student = await userDAO.findUserById('647939dba7112f7da119dc9c');
// console.log(student);
// student.courses.push({ course: '64793a65c6180105b2c79ea8' });

// const student = await courseDAO.findCourseById('64793a65c6180105b2c79ea8');
// console.log(student);
// student.students.push({ student: '647939dba7112f7da119dc9c' });

const student = await userDAO.findUserById('647939dba7112f7da119dc9c');
const course = await courseDAO.findCourseById('64793a65c6180105b2c79ea8');

// const student = await userDAO.addUser({
// 	name: 'Juan',
// 	email: 'Perez',
// 	courses: [],
// });

// const student = await courseDAO.addCourse({
// 	title: 'Curso 1',
// 	description: 'Curso 1',
// 	students: [],
// });

//console.log(await student.save());
console.log(JSON.stringify(student, null, '\t'));
console.log(JSON.stringify(course, null, '\t'));
mongoose.disconnect();
