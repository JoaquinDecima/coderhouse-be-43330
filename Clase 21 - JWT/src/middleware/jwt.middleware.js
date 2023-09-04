import jwt from 'jsonwebtoken';

const privatekey = 'privatekey';

const generateToken = (user) => {
	return jwt.sign(user, privatekey, { expiresIn: '1h' });
};

const authToken = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		res.status(401).send({ message: 'Token not found' });
	}

	// "Barrer ghadfghañfhg:23ogi34tgi3u4tgoi34:28732g28gfboiewfgoegfsiodgo"
	// ["Barrer", "ghadfghañfhg:23ogi34tgi3u4tgoi34:28732g28gfboiewfgoegfsiodgo"]
	// 'ghadfghañfhg:23ogi34tgi3u4tgoi34:28732g28gfboiewfgoegfsiodgo';
	const token = authHeader.split(' ')[1];

	jwt.verify(token, privatekey, (err, credentials) => {
		if (err) {
			res.status(401).send({ message: 'Token not valid' });
		}
		req.user = credentials.user;
		next();
	});
};

export { generateToken, authToken };
