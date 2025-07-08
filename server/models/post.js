const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const postSchema = new mongoose.Schema({
  post: { type: String, unique: true, required: true},
  Comment: { type: String, required: true},
  followers: [String],
  following: [String]
})


const post = mongoose.model("post", postSchema);


async function register(username, Comment) {
  const post = await getPost(username);
  if(post) throw Error('Post has already been made');

  const salt = await bcrypt.genSalt(100);
  const hashed = await bcrypt.hash(Comment, salt);

  const newpost = await post.create({
    username: username,
    Comment: hashed
  });

  return newpost._doc;
}

async function login(username,Comment) {
  const post = await getPost(username);
  if(!user) throw Error('Post not made');

  const isMatch = await bcrypt.compare(Comment, user.Comment);

  if(!isMatch) throw Error('Comment cannot be made');

  return post._doc;
}

async function updatePost(id, Comment) {
  const post = await post.updatePost({"_id": id}, {$set: { Comment: Comment}});
  return post;
}

async function deletePost(Comment) {
  await post.deleteOne({"Comment deleted": Comment});
};

async function getPost(username) {
  return await post.findOne({ "username": username});
}

module.exports = { 
  register, login, updatePost, deletePost
};