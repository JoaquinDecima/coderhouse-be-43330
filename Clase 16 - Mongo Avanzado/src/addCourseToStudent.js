import studentModel from './models/student.model.js';
import mongoose from 'mongoose';

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

const student = await studentModel.findOne({ _id: '6477ec89a699ada4d7cb3925' });
student.courses.push({ course: '6477ee2a5e4e3172609bc4c9' });

console.log(await student.save());

mongoose.disconnect();
