import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// Get all posts (limited to 100)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(100);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

// Create a new post (with limit check)
router.post('/', async (req, res) => {
  try {
    const postCount = await Post.countDocuments();
    if (postCount >= 100) {
      return res.status(403).json({ message: 'Post limit reached. Cannot add more posts.' });
    }

    const { title, link, additionalLinks, description, author } = req.body;
    const newPost = new Post({ 
      title, 
      link, 
      additionalLinks, 
      description, 
      author 
    });
    
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
});

export default router;
