import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const jwtStrategy = Strategy;
const jwtExtract = ExtractJwt;

const incializePassport = () => {
	passport.use(
		'jwt',
		new jwtStrategy(
			{
				jwtFromRequest: jwtExtract.fromExtractors([cookieExtractor]),
				secretOrKey: 'privatekey',
			},
			(payload, done) => {
				done(null, payload.user);
			}
		),
		async (payload, done) => {
			try {
				return done(null, payload);
			} catch (error) {
				done(error);
			}
		}
	);
};

const cookieExtractor = (req) => {
	let token = null;
	if (req && req.cookies) {
		token = req.cookies['token'];
	}
	return token;
};

export default incializePassport;
