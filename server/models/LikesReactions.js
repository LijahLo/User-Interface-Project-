const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const LikesReactionsSchema = new mongoose.Schema({
  Like: { type: Intl, unique: true, required: true},
  Reaction: { type: Date, required: true},
  followers: [String],
  following: [String]
})


const LikesReactions = mongoose.model("LikesReactions", LikesReactionsSchema);


async function register(username,Reaction ) {
  const LikesReactions = await getPost(username);
  if(LikesReactions) throw Error('You already liked the post');

  const salt = await bcrypt.genSalt(100);
  const hashed = await bcrypt.hash(Reaction, salt);

  const newLikesReactions = await LikesReactions.create({
    username: username,
    LikesReactions: hashed
  });

  return newLikesReactions._doc;
}

async function login(username,Reaction) {
  const LikesReactions = await getPost(username);
  if(!user) throw Error('No Like occured');

  const isMatch = await bcrypt.compare(Reaction, user.Reaction);

  if(!isMatch) throw Error('Like has already happened on this post');

  return LikesReactions._doc;
}

async function updateLikesReactions(id, Reaction) {
  const LikesReactions = await LikesReactions.updateOne({"_id": id}, {$set: { Reaction: Reaction}});
  return LikesReactions;
}

async function deleteLikesReactions(id) {
  await LikesReactions.deleteOne({"_id": id});
};

async function getLikesReactions(username) {
  return await LikesReactions.findOne({ "username": username});
}

module.exports = { 
  register, login, deleteLikesReactions, updateLikesReactions 
};