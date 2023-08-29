import { Router } from 'express';
import jwt from 'jsonwebtoken';

export default class MyRouter {
	constructor() {
		this.router = Router();
		this.init();
	}

	init() {}

	getRouter() {
		return this.router;
	}

	get(path, policies, ...callback) {
		this.router.get(
			path,
			this.handlerPolicies(policies),
			this.applyCallback(callback)
		);
	}

	post(path, policies, ...callback) {
		this.router.post(
			path,
			this.handlerPolicies(policies),
			this.applyCallback(callback)
		);
	}

	put(path, policies, ...callback) {
		this.router.put(
			path,
			this.handlerPolicies(policies),
			this.applyCallback(callback)
		);
	}

	delete(path, policies, ...callback) {
		this.router.delete(
			path,
			this.handlerPolicies(policies),
			this.applyCallback(callback)
		);
	}

	applyCallback(callbacks) {
		return callbacks.map((callback) => async (...params) => {
			try {
				await callback.apply(this, params);
			} catch (error) {
				console.log(error);
				params[1]
					.sendStatus(500)
					.send({ status: 'Internal Server Error', error });
			}
		});
	}

	handlerPolicies = (policies) => (req, res, next) => {
		if (policies[0] === 'PUBLIC') {
			return next();
		}

		const token = req.headers.authorization?.split(' ')[1];

		if (!token) {
			return res
				.sendStatus(401)
				.send({ status: 'Auth Error', error: 'Unauthorized' });
		}

		const user = jwt.verify(token, 'secret');

		if (!policies.includes(user.rol?.toUpperCase())) {
			return res
				.sendStatus(403)
				.send({ status: 'Auth Error', error: 'Forbidden' });
		}

		req.user = user;
		next();
	};
}
