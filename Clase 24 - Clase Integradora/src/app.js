import cookieParser from 'cookie-parser';
import express from 'express';
import handlebars from 'express-handlebars';
import passport from 'passport';
import mongoose from 'mongoose';
import session from 'express-session';

import incializePassport from './config/passport.config.js';
import postRouter from './routers/posts.router.js';
import userRouter from './routers/users.router.js';
import viewsRouter from './routers/views.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

// Seteo el directorio de archivos estáticos
app.use(express.static('public'));

// Middleware cookies parser
app.use(cookieParser('B2zdY3B$pHmxW%'));

incializePassport();
app.use(passport.initialize());

mongoose.connect(
	'mongodb+srv://jdecima:123@coderclaster.fttdpng.mongodb.net/?retryWrites=true&w=majority'
);

// Session
app.use(
	session({
		secret: 'B2zdY3B$pHmxW%',
		resave: true,
		saveUninitialized: true,
	})
);

// Routers
app.use('/', viewsRouter);
app.use('/api/user/', userRouter);
app.use('/api/post/', postRouter);
app.use('*', (req, res) => {
	res.redirect('/404');
});

app.listen(8080, () => {
	console.log('escucho el 8080');
});
