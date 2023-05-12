import { Router } from 'express';
import { cartController } from '../utils/instances.js';

const cartsRouter = Router();

cartsRouter.get('/:id', (req, res) => {
	const cartId = req.params.id;
	res.send(cartController.getCardById(cartId));
});

cartsRouter.post('/', (req, res) => {
	const cart = req.body;
	const status = cartController.addCart(cart);

	if (!status) {
		res.status(502).send();
	}

	res.status(201).send(status);
});

cartsRouter.post('/:cartId/product/:productId', (req, res) => {
	const cartId = req.params.cartId;
	const productId = req.params.productId;

	const status = cartController.addProductToCart(productId, cartId);

	if (!status) {
		res.status(404).send();
	}

	res.status(201).send();
});

cartsRouter.put('/', (req, res) => {});

cartsRouter.delete('/', (req, res) => {});

export default cartsRouter;
