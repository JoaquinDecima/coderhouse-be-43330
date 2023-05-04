import { Router } from 'express';
import { imgUploader } from '../configs/uploadImg.js';

// Defino un array para mis Pets
const pets = [];
// Creo una ruta nueva
const petsRouter = Router();

// Le digo a la ruta que utilice un middleware que defino yo
petsRouter.use((req, res, next) => {
	// si el type de mascota es Perro
	if (req.body.type === 'Perro') {
		// Retorno un error
		res.status(403).send('No Quiero alimañas');
	}
	// Sigo
	next();
});

// Defino GET
petsRouter.get('/', (req, res) => {
	res.send(pets); // retorno mascotas
});

// Defino post con middleware multer para imagen
petsRouter.post('/', imgUploader.single('img'), (req, res) => {
	// Si no tengo imagen
	if (req.file === undefined) {
		// Retorno error de falta de imagen
		res.status(401).send('Falto Imagen');
	}
	// Creo pet con datos de body
	const pet = req.body;
	// Le agrego el path de la imagen a mi objeto
	pet.img = req.file.path;
	// Agrego mi objeto a la lista
	pets.push(pet);
	// Retorno 201 con el objeto creado
	res.status(201).send(pet);
});

// Exporto la ruta
export { petsRouter };
