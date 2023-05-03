// importamos el paquete express
import express from 'express';
import LoggerManager from './models/LoggerManager.js';

// Creamos la aplicación
const app = express();
const loggerManager = new LoggerManager('./logs.db.vsk');

app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

app.get('/api/log', async (req, res) => {
	try {
		let logs = await loggerManager.getLogs();
		res.send(logs);
	} catch (err) {
		res.status(500).send({ err });
	}
});

app.get('/api/log/:lid', async (req, res) => {
	const id = req.params.lid;
	try {
		let logs = await loggerManager.getLog(id);
		res.send(logs);
	} catch (err) {
		res.status(500).send({ err });
	}
});

app.post('/api/log', async (req, res) => {
	try {
		const log = req.body;
		const logSaved = await loggerManager.addLog(log);
		res.send(logSaved);
	} catch (err) {
		res.status(500).send({ err });
	}
});

app.put('/api/log/:lid', async (req, res) => {
	const id = req.params.lid;
	const { fixed } = req.body;
	try {
		if (fixed === undefined) {
			throw new Error('Status no definido');
		}

		await loggerManager.setFixStatusLog(id, fixed);
		res.send();
	} catch (err) {
		console.log(err);
		res.status(500).send({ err: err });
	}
});

app.listen(8080, () => {
	console.log('Escuchando 8080');
});
