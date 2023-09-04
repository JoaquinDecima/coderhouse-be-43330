import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	gender: String,
	grade: Number,
	group: String,
});

const studentsModel = mongoose.model('students17', schema);
export default studentsModel;
