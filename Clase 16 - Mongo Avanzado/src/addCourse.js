import courseModel from './models/courses.model.js';
import mongoose from 'mongoose';

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

const data = await courseModel.create({
	title: 'Backend NodeJS',
	description: 'El backend que siempre amaste con gatitos y sin LOL',
	difficulty: 6,
	topics: [
		'JavaScript',
		'Node',
		'express',
		'Socket',
		'Gatitos',
		'Masculino',
		'DOTA',
	],
	profesor: 'Julian Fuentes',
});

console.log(data);

mongoose.disconnect();
