const express = require('express');
const Post = require('../models/posts');

const router = express.Router();

// GET ALL POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) { res.json({ message: e }); }
});

// SUBMIT NEW POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
    global.console.log(savedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

// SPECIFIC POST

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (e) { res.json({ message: e }); }
});

// DELETE SPECIFIC POST

router.delete('/:postId', async (req, res) => {
  try {
    const postRemove = await Post.remove({ _id: req.params.postId });
    res.json(postRemove);
  } catch (e) { res.json({ message: e }); }
});

// UPDATE SPECIFIC POST

router.patch('/:postId', async (req, res) => {
  try {
    const updateTitle = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } },
    );
    res.json(updateTitle);
  } catch (e) { res.json({ message: e }); }
});

module.exports = router;
