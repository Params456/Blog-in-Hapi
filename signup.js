var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Singup = new Schema({
    name : String,
    surname : String,
    email : String,
    password : String
})



module.exports = mongoose.model("signup",Singup)