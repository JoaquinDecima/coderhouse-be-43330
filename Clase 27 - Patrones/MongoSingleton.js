import mongoose from 'mongoose';

export default class MongoSingleton {
	static #instance;
	constructor() {
		mongoose.connect(
			'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
		);
	}

	static getInstance() {
		if (!this.#instance) {
			this.#instance = new MongoSingleton();
		}
		return this.#instance;
	}
}
