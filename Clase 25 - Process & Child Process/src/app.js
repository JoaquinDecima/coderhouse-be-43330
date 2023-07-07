import { fork } from 'node:child_process';
import express from 'express';
import enviroment from './config/enviroment.js';

const app = express();
let contador = 0;

app.get('/', (req, res) => {
	contador++;
	res.send({ contador });
});

app.get('/suma', (req, res) => {
	const child = fork('./src/tools/operacionCompleja.js');
	child.send('Hace el calculo, vago!');
	child.on('message', (result) => {
		res.send(`El resultado es ${result}`);
	});
});

app.get('/suma2', (req, res) => {
	let result = 0;
	for (let i = 0; i < 5e9; i++) {
		result += i;
	}
	res.send(`El resultado es ${result}`);
});

app.listen(enviroment.PORT, () => {
	console.log(`Server on port ${enviroment.PORT}`);
});
