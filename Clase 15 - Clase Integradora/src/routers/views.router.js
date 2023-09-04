import { Router } from 'express';
import { studentService } from '../services/student.service.js';

const viewsRouter = Router();

viewsRouter.use('/', async (req, res) => {
	try {
		const students = await studentService.getAllStudents();

		res.render('students', { students });
	} catch (err) {
		res.render('error');
	}
});

export default viewsRouter;
