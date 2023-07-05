import Router from 'express';
import postService from '../services/post.service.js';
import userService from '../services/user.service.js';

const postRouter = Router();

postRouter.get('/', async (req, res) => {
	try {
		const posts = await postService.getAll();
		res.send(posts);
	} catch (err) {
		res.redirect('/error');
	}
});

postRouter.post('/', async (req, res) => {
	const post = req.body;
	try {
		const newPost = await postService.create(post);

		const user = await userService.getById(post.user);
		console.log(user);
		user.post.push(newPost._id);
		await user.save();

		res.status(201).json(newPost);
	} catch (err) {
		console.log(err);
		res.redirect('/error');
	}
});

export default postRouter;
