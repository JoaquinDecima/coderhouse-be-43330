import mongoose from 'mongoose';
import { studentSchema } from './student.model.js';

const courseScheme = new mongoose.Schema({
	name: String,
	year: Number,
	students: {
		type: [studentSchema],
		require: false,
		default: [],
	},
});

export const courseModel = mongoose.model('courses', courseScheme);
