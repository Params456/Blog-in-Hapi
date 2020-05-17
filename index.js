var Hapi = require("hapi");
var mongoose = require("mongoose");
var server = new Hapi.server({
    host : 'localhost',
    port : 2000
})
var signup = require("./signup");
var Blog = require("./Blog")
var jwt = require("jsonwebtoken");
var all = require("./Controller/Controller")
var Middle = require("./Middle/Middle")


var db = {useNewUrlParser: true,useUnifiedTopology: true}
mongoose.connect('mongodb://localhost:27017/Blog',db);

server.route({
    method : "POST",
    path : "/signup",
    handler : all.thaman
})   


server.route({
    method : "POST",
    path : "/login",
    handler : all.login
})

server.route({
    method : "GET",
    path : "/Get",
    handler : all.get
})

server.route({
    method : "GET",
    path : "/Get/{email}",
    handler : all.getName
})

server.route({
    method : "POST",
    path : "/post",
    handler : all.Blog
})

server.route({
    method : "PUT",
    path : "/put/{email}",
    handler : all.Blog
})

server.route({
    method : "DELETE",
    path : "/del/{email}",
    handler : all.Blog
})

server.start();
console.log(`Server started at ${server.info.uri}`)
