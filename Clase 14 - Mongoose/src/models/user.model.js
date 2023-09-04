import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	email: {
		type: String,
		unique: true,
	},
});

export const userModel = mongoose.model('users', userSchema);
