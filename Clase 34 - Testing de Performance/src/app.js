import express from 'express';
import mongoose from 'mongoose';
import User from './model/user.model';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await mongoose.connect(
    'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name) res.status(400).send('Name is required');
        if (!email) res.status(400).send('Email is required');
        if (!password) res.status(400).send('Password is required');

        const user = new User({
            name,
            email,
            password,
        });

        await user.save();

        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('There was a problem trying to register the user');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email) res.status(400).send('Email is required');
        if (!password) res.status(400).send('Password is required');

        const user = await User.findOne({ email })

        if (!user) res.status(404).send('User not found');

        if (user.password !== password) res.status(401).send('Invalid password');

        res.status(200).send({ message: 'Login successfull', user });
    } catch (error) { }
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Server running');
});