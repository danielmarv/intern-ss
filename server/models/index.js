require('dotenv').config();

const mongoose = require("mongoose");

mongoose.set("debug", true);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports.Student = require("./student");
module.exports.Internship = require("./internship");
module.exports.Notices = require("./notices");
module.exports.Faculty = require("./faculty");
