import mongoose from 'mongoose';

const studientSchema = new mongoose.Schema({
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
	note: {
		type: Number,
		required: true,
	},
});

export const studientModel = mongoose.model('studients', studientSchema);
