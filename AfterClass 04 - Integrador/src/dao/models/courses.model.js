import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
	title: String,
	description: String,
	students: {
		type: [
			{
				student: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'users2',
				},
			},
		],
		default: [],
	},
});

const courseModel = mongoose.model('courses', courseSchema);

export default courseModel;
