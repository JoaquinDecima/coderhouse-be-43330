export function auth(req, res, next) {
	if (req.session.user === 'Pato' && req.session.admin) {
		next();
	}

	res.status(401).send('Que mira Bobo no pode estar aca!');
}
