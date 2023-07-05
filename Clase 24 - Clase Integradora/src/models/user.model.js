import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		index: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		index: true,
	},
	password: String,
	img: String,
	post: {
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'posts24',
			},
		],
		default: [],
	},
});

const userModel = mongoose.model('users24', userSchema);

export default userModel;
