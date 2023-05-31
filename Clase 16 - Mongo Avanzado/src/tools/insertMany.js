import userModel from '../models/user.model.js';
import mongoose from 'mongoose';
import users from '../data/users.json' assert { type: 'json' };

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

const data = await userModel.insertMany(users);

console.log(data);
