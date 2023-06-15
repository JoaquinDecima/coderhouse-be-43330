import studentModel from './models/student.model.js';
import mongoose from 'mongoose';

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

const data = await studentModel.create({
	first_name: 'Gabriel',
	last_name: 'Spina',
	email: 'GabrielSp@ch.com',
	gender: 'Masculino',
});

console.log(data);

mongoose.disconnect();
