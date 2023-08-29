import express from 'express';
import mongoose from 'mongoose';
import User from './model/user.model.js';
import enviroment from './tools/enviroment.tool.js';
import { faker } from '@faker-js/faker'
import { loggerMiddleware } from './middleware/logger.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

await mongoose.connect(enviroment.MONGO_URI);

app.get('/', (req, res) => {
    try {
        req.logger.info('Ingresa en try');
        throw new Error('Exploto TODO');
        res.send('Hello world');
    } catch (error) {
        req.logger.error("Boom");
        res.status(500).send('BOOM');
    }

});

app.get('/op1', (req, res) => {
    let num = 0;
    for (let i = 0; i < 100000; i++) {
        num += i;
    }
    res.send({ num });
});

app.get('/op2', (req, res) => {
    let num = 0;
    for (let i = 0; i < 10e8; i++) {
        num += i;
    }
    res.send({ num });
});


app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name) {
            req.logger.warn("Name is required");
            res.status(400).send('Name is required');
        }
        if (!email) {
            req.logger.warn("Name is required");
            res.status(400).send('Email is required');
        }
        if (!password) {
            req.logger.warn("Name is required");
            res.status(400).send('Password is required');
        }

        const user = new User({
            name,
            email,
            password,
        });

        await user.save();
        req.logger.info("User created");

        res.status(201).send(user);
    } catch (error) {
        req.logger.error(error);
        res.status(500).send('There was a problem trying to register the user');
    }
});

app.get('/user', async (req, res) => {
    const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }

    res.json(user);
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email) {
            req.logger.warn("Name is required");
            res.status(400).send('Email is required');
        }
        if (!password) {
            req.logger.warn("Name is required");
            res.status(400).send('Password is required');
        }

        const user = await User.findOne({ email })

        if (!user) {
            req.logger.warn("User not found");
            res.status(404).send('User not found')
        };

        if (user.password !== password) {
            req.logger.warn("Invalid password");
            res.status(401).send('Invalid password');
        }

        req.logger.info("Login successfull");
        res.status(200).send({ message: 'Login successfull', user });
    } catch (error) {
        req.logger.error(error);
        res.status(500).send('There was a problem trying to login the user');
    }
});

app.listen(enviroment.PORT, () => {
    console.log('Server running');
});