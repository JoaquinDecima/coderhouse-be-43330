import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true, lowercase: true, index: true },
    password: String,
});

const User = mongoose.model('User34', userSchema);
export default User;