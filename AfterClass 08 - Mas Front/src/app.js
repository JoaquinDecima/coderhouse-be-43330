import express from 'express';
import mongoose from 'mongoose';

import businessRoutes from './business/business.router.js';
import ordersRoutes from './orders/orders.router.js';
import usersRoutes from './users/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/api/business', businessRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/users', usersRoutes);

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

app.listen(8080, () => console.log('Server started on port 8080'));