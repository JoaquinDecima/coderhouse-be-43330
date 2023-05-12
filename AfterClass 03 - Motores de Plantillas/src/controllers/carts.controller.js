import { productsController } from '../utils/instances.js';

export default class CartController {
	#id = 0;
	constructor() {
		this.carts = [];
	}

	#getID() {
		this.#id++;
		return this.#id;
	}

	getCardById(cartID) {
		return this.carts.find((cart) => cart.id === cartID);
	}

	addCart(cart) {
		cart.id = this.#getID().toString();
		this.carts.push(cart);
		return cart;
	}

	addProductToCart(productId, cartId) {
		const product = productsController.getProductById(productId);
		let status = false;
		this.carts.map((cart) => {
			if (cart.id === cartId) {
				status = true;
				cart.products.push(product);
			}
			return cart;
		});
		return status;
	}
}
