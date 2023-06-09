import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const schema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	gender: String,
	grade: Number,
	group: String,
});

schema.plugin(mongoosePaginate);

const studentsModel = mongoose.model('students17', schema);
export default studentsModel;
