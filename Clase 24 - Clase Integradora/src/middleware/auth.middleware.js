import passport from 'passport';

const middlewarePassportJWT = async (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (err, usr, info) => {
		if (err) {
			next(err);
		}

		if (!usr) {
			res.redirect('/public');
		}

		req.user = usr;
		next();
	})(req, res, next);
};

export { middlewarePassportJWT };
