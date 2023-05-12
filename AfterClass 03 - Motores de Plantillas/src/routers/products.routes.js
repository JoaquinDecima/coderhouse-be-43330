import { Router } from 'express';
import { productsController } from '../utils/instances.js';

const productsRouter = Router();

productsRouter.get('/', (req, res) => {
	const max = req.query.max;
	res.send(productsController.getProducts(max));
});

productsRouter.post('/', (req, res) => {
	const product = req.body;
	const status = productsController.addProduct(product);

	if (!status) {
		res.status(500).send();
	}

	res.status(201).send(status);
});

productsRouter.delete('/:id', (req, res) => {});

productsRouter.put('/:id', (req, res) => {});

export default productsRouter;
