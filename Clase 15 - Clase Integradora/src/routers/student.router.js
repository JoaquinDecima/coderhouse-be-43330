import { Router } from 'express';
import { studentService } from '../services/student.service.js';

const studentRouter = Router();

studentRouter.get('/', async (req, res) => {
	try {
		const students = await studentService.getAllStudents();
		res.send(students);
	} catch (err) {
		res.status(500).send({ err });
	}
});

studentRouter.post('/', async (req, res) => {
	const student = req.body;
	try {
		const studentAdd = await studentService.addStudent(student);
		res.send(studentAdd);
	} catch (err) {
		res.status(500).send({ err });
	}
});

studentRouter.delete('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		await studentService.removeStudent(uid);
		res.sendStatus(204);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default studentRouter;
