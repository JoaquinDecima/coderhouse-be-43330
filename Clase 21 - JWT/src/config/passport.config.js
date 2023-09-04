import passport from 'passport';
import GitHubStrategy from 'passport-github2';
import userServices from '../services/user.service.js';

const incializePassport = () => {
	passport.use(
		'github',
		new GitHubStrategy(
			{
				clientID: 'Iv1.b25b63c969b98305',
				clientSecret: 'f774f7e77326bc3b632f7cc30fc3fc3f3e4b0918',
				callbackURL:
					'http://localhost:8080/api/sessions/githubcallback',
			},
			async (accessToken, refreshToken, profile, done) => {
				try {
					console.log(profile);
					let user = await userServices.getByEmail(
						profile._json.email
					);
					if (!user) {
						let newUser = {
							first_name: profile._json.name,
							last_name: '',
							email: profile._json.email,
							password: '',
							img: profile._json.avatar_url,
						};
						user = await userServices.createUser(newUser);
						done(null, user);
					} else {
						done(null, user);
					}
				} catch (error) {
					done(error, false);
				}
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser(async (id, done) => {
		const user = await userServices.getById(id);
		done(null, user);
	});
};

export default incializePassport;
