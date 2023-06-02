import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: String,
	email: String,
	courses: {
		type: [
			{
				course: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'courses',
				},
			},
		],
		default: [],
	},
});

const userModel = mongoose.model('users2', userSchema);

export default userModel;
