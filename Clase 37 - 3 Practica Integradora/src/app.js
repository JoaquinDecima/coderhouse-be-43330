import express from 'express';
import __dirname from './utils.js';

import usersRouter from './routes/users.router.js';
import coursesRouter from './routes/courses.router.js';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js'

import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import cookieParser from 'cookie-parser';

import config from './config/enviroment.config.js';

const app = express();

mongoose.connect(config.MONGO_URI)

/**
 * Template engine
 */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

/**
 * Middlewares
 */
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());

app.use('/', viewsRouter)
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(config.PORT, () => console.log(`Listening on PORT ${config.PORT}`));
