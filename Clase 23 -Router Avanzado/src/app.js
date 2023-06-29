import express from 'express';
import UserRouter from './routes/UserRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', new UserRouter().getRouter());

app.listen(8080, () => {
	console.log('escucho el 8080');
});
