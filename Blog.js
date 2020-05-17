var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Blog = new Schema({
    email : String,
    Blog : String
})

module.exports = mongoose.model("blog",Blog);
