import express from 'express';
import CreateUserDTO from './dto/CreateUserDTO.js';
import LoginUserDTO from './dto/LoginUserDTO.js';

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    const user = req.body;
    try {
        const createUserDAO = new CreateUserDTO(user);
        console.log(createUserDAO);
        res.send('User Created');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.post('/login', (req, res) => {
    const user = req.body;
    try {
        const createUserDAO = new LoginUserDTO(user);
        console.log(createUserDAO);
        res.send('User Created');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});