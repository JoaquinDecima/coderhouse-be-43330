import express from 'express';
import mongoose from 'mongoose';
import contactRouter from './contact/contact.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

app.use('/api/contact', contactRouter);

app.listen(3000, () => {
    console.log('Server on port 3000');
});