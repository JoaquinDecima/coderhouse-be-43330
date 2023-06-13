import mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	dni: {
		type: String,
		required: true,
		unique: true,
	},
	year: {
		type: Number,
		required: true,
	},
});

export const studentModel = mongoose.model('students', studentSchema);
