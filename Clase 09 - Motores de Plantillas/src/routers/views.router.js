import { Router } from 'express';
import FoodService from '../services/FoodService.js';
import { userService } from '../services/UserService.js';

const viewsRouter = Router();
const foodService = new FoodService();

viewsRouter.get('/', (req, res) => {
	const user = userService.getUsers()[0];
	const cant = userService.getUsers().length;
	const foods = foodService.getFood();
	res.render('index', { user, isAdmin: user.role === 'admin', foods, cant });
});

viewsRouter.get('/register', (req, res) => {
	res.render('register');
});

export default viewsRouter;
