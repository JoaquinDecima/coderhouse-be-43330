import { Router } from 'express';
import FoodController from '../controllers/FoodController.js';
import { userController } from '../controllers/UserController.js';

const viewsRouter = Router();
const foodController = new FoodController();

viewsRouter.get('/', (req, res) => {
	const user = userController.getUsers()[0];
	const cant = userController.getUsers().length;
	const foods = foodController.getFood();
	res.render('index', { user, isAdmin: user.role === 'admin', foods, cant });
});

viewsRouter.get('/register', (req, res) => {
	res.render('register');
});

export default viewsRouter;
