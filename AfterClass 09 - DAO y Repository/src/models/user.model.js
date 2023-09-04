import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: {
        type: String,
        unique: true,
    },
});

export const userModel = mongoose.model('users09', userSchema);
