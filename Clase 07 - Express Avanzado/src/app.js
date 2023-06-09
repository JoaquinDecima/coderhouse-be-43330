// importamos el paquete express
import express from 'express';
import FraseService from './service/FraseService.js';

// Creamos la aplicación
const app = express();
const fraseService = new FraseService('Frase Inicial');

app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

app.get('/api/frase', (req, res) => {
	res.send({ frase: fraseService.getFrase() });
});

app.get('/api/palabras/:pos', (req, res) => {
	try {
		let buscada = fraseService.getPalabra(req.params.pos - 1);
		res.send({ buscada });
	} catch (err) {
		res.status(400).send({ err });
	}
});

app.post('/api/palabras/', (req, res) => {
	let { palabra } = req.body;
	let pos = fraseService.addPalabra(palabra) + 1;
	res.status(201).send({ pos, agregada: palabra });
});

app.put('/api/palabras/:pos', (req, res) => {
	const index = req.params.pos - 1;
	let { palabra } = req.body;
	try {
		let anterior = fraseService.getPalabra(index);
		fraseService.updatePalabra(index, palabra);
		res.send({ anterior, actualizada: palabra });
	} catch (err) {
		res.status(400).send({ err });
	}
});

app.delete('/api/palabras/:pos', (req, res) => {
	const index = req.params.pos - 1;
	try {
		fraseService.deletePalabra(index);
		res.send();
	} catch (err) {
		res.status(400).send({ err });
	}
});

app.listen(8080, () => {
	console.log('escucho el 8080');
});
