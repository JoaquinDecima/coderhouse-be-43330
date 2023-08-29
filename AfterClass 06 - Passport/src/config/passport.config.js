import passport from 'passport';
import local from 'passport-local';
import userService from '../services/user.service.js';
import { comparePassword, hashPassword } from '../utils/encript.util.js';

const LocalStrategy = local.Strategy;

const inicializePassport = () => {
	passport.use(
		'register',
		new LocalStrategy(
			{ usernameField: 'email', passReqToCallback: true },
			async (req, username, password, done) => {
				const { first_name, last_name, img } = req.body;

				try {
					// recuperar usuario con ese email
					const user = await userService.getByEmail(username);

					// si existe, devolver error
					if (user) {
						return done(null, false, {
							message: 'User already exists',
						});
					}

					// si no existe, crearlo

					// encriptar password
					const hashedPassword = await hashPassword(password);

					const newUser = await userService.createUser({
						first_name,
						last_name,
						email: username,
						password: hashedPassword,
						img,
					});

					return done(null, newUser);
				} catch (error) {
					done(error);
				}
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser(async (id, done) => {
		const user = await userService.getUserById(id);
		done(null, user);
	});

	passport.use(
		'login',
		new LocalStrategy(
			{ usernameField: 'email' },
			async (username, password, done) => {
				try {
					const user = await userService.getByEmail(username);

					if (!user) {
						return done(null, false, { message: 'User not found' });
					}

					if (!comparePassword(user, password)) {
						return done(null, false, { message: 'Invalid data' });
					}

					return done(null, user);
				} catch (error) {
					done(error);
				}
			}
		)
	);
};

export default inicializePassport;
