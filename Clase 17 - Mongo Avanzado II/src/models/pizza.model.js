import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
	name: String,
	size: {
		type: String,
		enum: ['small', 'medium', 'large'],
		default: 'medium',
	},
	price: Number,
	quantity: Number,
});

const PizzaModel = mongoose.model('pizzas', pizzaSchema);

export default PizzaModel;
