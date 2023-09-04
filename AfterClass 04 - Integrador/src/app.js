import express from 'express';
import mongoose from 'mongoose';

import usersRouter from './routes/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

app.use('/api/users', usersRouter);

app.listen(8080, () => {
	console.log('Server listening on port 8080');
});
