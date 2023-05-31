import userModel from './models/user.model.js';
import mongoose from 'mongoose';

await mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

const data = await userModel
	.find({ first_name: 'Cecilia' })
	.explain('executionStats');

console.log(data);

mongoose.disconnect();
