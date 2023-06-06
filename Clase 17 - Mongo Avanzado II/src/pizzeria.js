import mongoose from 'mongoose';
import PizzaModel from './models/pizza.model.js';
import dataPizza from './data/pizzas.json' assert { type: 'json' };

await mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

// Ageregar un array de objetos a la base de datos
//const data = await PizzaModel.insertMany(dataPizza);

// Chequear que se haya agregado
//const data = await PizzaModel.find();

// Ejercicio 1
const data = await PizzaModel.aggregate([
	{
		$match: { size: 'medium' },
	},
	{
		$group: { _id: '$name', totalQuantity: { $sum: '$quantity' } },
	},
	{
		$sort: { totalQuantity: -1 },
	},
	{
		$group: { _id: 1, orders: { $push: '$$ROOT' } },
	},
	{
		$project: { _id: 0, orders: '$orders' },
	},
	{
		$merge: {
			into: 'reports',
		},
	},
]);

console.log(data);

mongoose.disconnect();
