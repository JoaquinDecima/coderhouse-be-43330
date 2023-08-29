import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
	name: String,
	email: String,
	phoneNumber: Number,
});

const contactsModel = mongoose.model('contacts29', contactSchema);

export default contactsModel;
