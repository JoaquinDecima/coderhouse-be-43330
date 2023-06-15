import Router from 'express';
import studentsService from '../services/students.service.js';

const viewsRouter = Router();

viewsRouter.get('/', async (req, res) => {
	const { limit, page, gender } = req.query;
	const data = await studentsService.getAllStudentsForView(
		limit,
		page,
		gender
	);
	data.gender = gender;
	res.render('students', data);
});

export default viewsRouter;
