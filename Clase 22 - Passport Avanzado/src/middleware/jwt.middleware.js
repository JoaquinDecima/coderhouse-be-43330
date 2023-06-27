import jwt from 'jsonwebtoken';
const privatekey = 'privatekey';
import passport from 'passport';

const generateToken = (user) => {
	return jwt.sign(user, privatekey, { expiresIn: '1h' });
};

const authToken = (req, res, next) => {
	const authHeader = req.cookies.token;

	if (!authHeader) {
		res.status(401).send({ message: 'Token not found' });
	}

	// "Barrer ghadfghañfhg:23ogi34tgi3u4tgoi34:28732g28gfboiewfgoegfsiodgo"
	// ["Barrer", "ghadfghañfhg:23ogi34tgi3u4tgoi34:28732g28gfboiewfgoegfsiodgo"]
	// 'ghadfghañfhg:23ogi34tgi3u4tgoi34:28732g28gfboiewfgoegfsiodgo';
	const token = authHeader.split(' ')[1];

	jwt.verify(authHeader, privatekey, (err, credentials) => {
		if (err) {
			res.status(401).send({ message: 'Token not valid' });
		}
		req.user = credentials;
		next();
	});
};

const middlewarePassportJWT = async (req, res, next) => {
	console.log('middlewarePassportJWT');
	passport.authenticate('jwt', { session: false }, (err, usr, info) => {
		if (err) {
			next(err);
		}

		if (!usr) {
			res.status(401).send({
				message: info.messages ? info.messages : info.toString(),
			});
		}

		req.user = usr;
		next();
	})(req, res, next);
};

export { generateToken, authToken, middlewarePassportJWT };
