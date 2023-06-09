require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');

const server = express();
const productRouter = require("./routes/productRouter");
// const usersRouter = require('./routes/usersRouter')

// DB CONNECTION CODE
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// SCHEMA


// Body Parser
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(path.resolve(), 'dist')))
server.use("/products", productRouter.router);
server.use('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'dist/index.html'));
})
// server.use('/users', usersRouter.router);
console.log(path.join(path.resolve(), 'public'));
server.listen(8080, () => {
  console.log("server started");
});

// 5RLlE8XlsIs7pHxU
