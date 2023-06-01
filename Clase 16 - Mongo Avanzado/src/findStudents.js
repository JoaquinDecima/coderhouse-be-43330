import studentModel from './models/student.model.js';
import mongoose from 'mongoose';

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

const data = await studentModel.find();

console.log(JSON.stringify(data, null, '\t'));
mongoose.disconnect();
