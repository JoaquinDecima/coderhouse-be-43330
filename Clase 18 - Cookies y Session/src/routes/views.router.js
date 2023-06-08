import { Router } from 'express';

const viewsRouter = Router();

viewsRouter.get('/cookie', (req, res) => {
	res.render('cookie');
});

export default viewsRouter;
