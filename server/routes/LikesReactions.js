const express = require("express");
const LikesReactions = require('../models/LikesReactions'); 
const router = express.Router();

router
  .post('/login', async (req, res) => {
    try {
      const LikesReactions  = await LikesReactions.login(req.body.username, req.body.Reaction);
      res.send({...user, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const LikesReactions  = await LikesReactions.register(req.body.username, req.body.Reaction);
      res.send({...post, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const LikesReactions  = await LikesReactions.updateReaction(req.body.id, req.body.Reaction);
      res.send({...post, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await LikesReactions.deletePost(req.body.id);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
router.get('/', (req, res) => {
  res.send("This route is working!");
});

module.exports = router;