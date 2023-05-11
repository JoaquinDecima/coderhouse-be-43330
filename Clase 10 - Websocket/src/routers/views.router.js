import { Router } from 'express';

// Instanciamos el router
const viewsRouter = Router();

// Definimos la ruta para el home
viewsRouter.get('/', (req, res) => {
	// Renderizamos la vista index
	res.render('index');
});

// Exportamos el router
export default viewsRouter;
