require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(process.env.dbURL)
const path = require('path');

app.use(express.json());

const userRoutes = require('./server/routes/user')
const postRoutes = require('./server/routes/post')
const LikesReactions = require('./server/routes/LikesReactions') 

mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!!"))
  .catch(error => console.log(error));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  next();
});

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));

app.use('/user', userRoutes);
app.use('/post',postRoutes) 
app.use('/LikesReactions',LikesReactions)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
