import { Router } from 'express';
import { courseService } from '../services/course.service.js';

const courseRouter = Router();

courseRouter.get('/', async (req, res) => {
	try {
		const courses = await courseService.getAllCourses();
		res.send(courses);
	} catch (err) {
		res.status(500).send({ err });
	}
});

courseRouter.post('/', async (req, res) => {
	const course = req.body;
	try {
		const courseAdded = await courseService.addCouse(course);
		res.send(courseAdded);
	} catch (err) {
		res.status(500).send({ err });
	}
});

courseRouter.post('/:courseId', async (req, res) => {
	const courseId = req.params.courseId;
	const studientId = req.body.sId;
	try {
		const courseAdded = await courseService.addStudientCouse(
			courseId,
			studientId
		);
		res.send(courseAdded);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default courseRouter;
