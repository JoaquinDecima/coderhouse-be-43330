import { Router } from 'express';
import toysController from '../controllers/toys.controller.js';

const toysRouter = Router();

toysRouter.get('/', (req, res) => {
	res.json(toysController.getToys());
});

toysRouter.post('/', (req, res) => {
	const toy = req.body;
	toysController.addToy(toy);
	res.status(201).json(toy);
});

toysRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	toysController.deleteToy(id);
	res.status(200).json();
});

toysRouter.put('/:id', (req, res) => {
	const { id } = req.params;
	const toy = req.body;
	toysController.updateToy(id, toy);
	res.status(200).json(toysController.getToysbyId(id));
});

export default toysRouter;
