export default class ProductsService {
	#id = 0;
	constructor() {
		this.products = [];
	}

	getProducts(max) {
		let products = this.products;
		if (max) {
			products = this.products.slice(0, max);
		}
		return products;
	}

	addProduct(product) {
		product.id = this.#getID().toString();
		this.products.push(product);
		return product;
	}

	getProductById(productId) {
		return this.products.find((product) => product.id === productId);
	}

	#getID() {
		this.#id++;
		return this.#id;
	}
}
