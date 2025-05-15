import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  link: { type: String, required: true },
  additionalLinks: [{ type: String }],
  description: { type: String, maxlength: 200 },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'Posts' });

export default mongoose.model('Post', postSchema);