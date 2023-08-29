import { Router } from 'express';
import { cartService } from '../utils/instances.js';

const cartsRouter = Router();

cartsRouter.get('/:id', (req, res) => {
	const cartId = req.params.id;
	res.send(cartService.getCardById(cartId));
});

cartsRouter.post('/', (req, res) => {
	const cart = req.body;
	const status = cartService.addCart(cart);

	if (!status) {
		res.status(502).send();
	}

	res.status(201).send(status);
});

cartsRouter.post('/:cartId/product/:productId', (req, res) => {
	const cartId = req.params.cartId;
	const productId = req.params.productId;

	const status = cartService.addProductToCart(productId, cartId);

	if (!status) {
		res.status(404).send();
	}

	res.status(201).send();
});

cartsRouter.put('/', (req, res) => {});

cartsRouter.delete('/', (req, res) => {});

export default cartsRouter;
