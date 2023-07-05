import postModel from '../models/post.model.js';

class PostService {
	constructor() {
		this.model = postModel;
	}

	async create(post) {
		return await this.model.create(post);
	}

	async getAll() {
		return await this.model.find();
	}

	getPrivatedPosts(posts) {
		return this.model.find().populate('user').lean();
	}

	getPublicPosts(posts) {
		return this.model.find({ public: true }).populate('user').lean();
	}
}

const postService = new PostService();

export default postService;
