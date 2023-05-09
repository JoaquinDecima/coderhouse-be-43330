export default class FoodController {
	#food;
	constructor() {
		this.#food = [
			{ name: 'Manzana', price: 1 },
			{ name: 'Fideos', price: 4 },
			{ name: 'Bondiola', price: 5 },
			{ name: 'Almendras', price: 9 },
			{ name: 'Tofu', price: 2 },
		];
	}

	getFood() {
		return this.#food;
	}
}
