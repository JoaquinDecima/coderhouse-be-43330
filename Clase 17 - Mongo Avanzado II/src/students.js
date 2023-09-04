import mongoose from 'mongoose';
import studentsModel from './models/students.model.js';
import students from './data/students.json' assert { type: 'json' };

await mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

// Inserto estudiantes
// const result = await studentsModel.insertMany(students);
// console.log(result);

//AGRUPAR POR CALIFICACIÓN DE MAYOR A MENOR
// const result = await studentsModel.aggregate([
// 	{ $group: { _id: '$grade', students: { $push: '$$ROOT' } } },
// 	{ $sort: { _id: -1 } },
// ]);
// console.log(JSON.stringify(result, 2, '\t'));

//AGRUPAR ESTUDIANTES POR GRUPO
// const result = await studentsModel.aggregate([
// 	{ $group: { _id: '$group', students: { $push: '$$ROOT' } } },
// ]);
// console.log(JSON.stringify(result, 2, '\t'));

//PROMEDIO ESTUDIANTES 1B
// const result = await studentsModel.aggregate([
// 	{ $match: { group: '1B' } },
// 	{ $group: { _id: '1B', promedio: { $avg: '$grade' } } },
// ]);
// console.log(result);

//PROMEDIO DE ESTUDIANTES 1A
// const result = await studentsModel.aggregate([
// 	{ $match: { group: '1A' } },
// 	{ $group: { _id: '1A', promedio: { $avg: '$grade' } } },
// ]);
// console.log(result);

//PROMEDIO GENERAL DE ESTUDIANTES.
// const result = await studentsModel.aggregate([
// 	{ $group: { _id: 'Students', promedio: { $avg: '$grade' } } },
// ]);
// console.log(result);

//PROMEDIO SOLO HOMBRES
// const result = await studentsModel.aggregate([
// 	{ $match: { gender: 'Male' } },
// 	{ $group: { _id: 'Hombres', promedio: { $avg: '$grade' } } },
// ]);
// console.log(result);

//PROMEDIO MUJERES
// const result = await studentsModel.aggregate([
// 	{ $match: { gender: 'Female' } },
// 	{ $group: { _id: 'Mujeres', promedio: { $avg: '$grade' } } },
// ]);
// console.log(result);

mongoose.disconnect();
