import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	first_name: {
		type: String,
		index: true,
	},
	last_name: String,
	email: String,
	gender: String,
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
