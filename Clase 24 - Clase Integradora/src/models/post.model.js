import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	content: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users24',
		public: { type: Boolean, default: false },
	},
});

const postModel = mongoose.model('posts24', postSchema);

export default postModel;
