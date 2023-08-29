import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
	res.json({ mensaje: 'Hola mundo' });
});

app.listen(8080, () => {
	console.log('Servidor escuchando en el puerto 8080');
});
