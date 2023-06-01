import mongoose from 'mongoose';
import courseModel from './courses.model.js';

const studentSchema = mongoose.Schema({
	first_name: {
		type: String,
		index: true,
	},
	last_name: String,
	email: String,
	gender: String,
	courses: {
		default: [],
		type: [
			{
				course: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'courses',
				},
			},
		],
	},
});

studentSchema.pre('find', function () {
	this.populate('courses.course');
});

const studentModel = mongoose.model('students', studentSchema);

export default studentModel;
