import { Router } from 'express';
import studientService from '../service/studient.service.js';

const studientsRouter = Router();

studientsRouter.get('/', async (req, res) => {
	try {
		const studients = await studientService.getAll();
		res.send(studients);
	} catch (err) {
		res.status(500).send({ err });
	}
});

studientsRouter.post('/', async (req, res) => {
	try {
		const studient = await studientService.addStudient(req.body);
		res.status(201).send(studient);
	} catch (err) {
		res.status(500).send({ err });
	}
});

studientsRouter.put('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		const studient = await studientService.updateStudient(uid, req.body);
		res.status(201).send(studient);
	} catch (err) {
		res.status(500).send({ err });
	}
});

studientsRouter.delete('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		await studientService.deleteStudient(uid);
		res.sendStatus(204);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default studientsRouter;
