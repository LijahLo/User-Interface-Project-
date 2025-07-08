const express = require("express");
const post = require('../models/post'); 
const router = express.Router();


router
  .post('/login', async (req, res) => {
    try {
      const post = await post.login(req.body.username, req.body.Comment);
      res.send({...user, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const post = await post.register(req.body.username, req.body.Comment);
      res.send({...post, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const post = await post.updateComment(req.body.id, req.body.Comment);
      res.send({...post, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await post.deletePost(req.body.id);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
router.get('/', (req, res) => {
  res.send("This route is working!");
});

module.exports = router;