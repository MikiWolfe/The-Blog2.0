const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const postSchema = require("./Post");

const userSchena = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  posts: [postSchema]
});
