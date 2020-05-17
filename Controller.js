var mongoose = require("mongoose");

var signup = require("../signup");
var jwt = require("jsonwebtoken");

var Middle = require("../Middle/Middle")
var Blog = require("../Blog")

module.exports = {


    async thaman (req,reply){
        const _all = await signup.find({})
        flag = true
        for (var i of _all){
            if (i.email == req.payload.email){
                flag = false
            }
        }
        if (flag){
            const res =signup.create(req.payload)
            return({Data:"Inserted"})
        }else{
            return({Result : "Already exists!"})
        }
    },



    async login (req,reply)  {
        const res = await signup.find({})
        var flag = true
        var flag1 = true
        for (var i of res){
            if (i.email === req.payload.email){
                flag = false
            }
            if (i.password === req.payload.password){
                flag1 = false
                that = i
            }
        }
        if (flag && flag1){
            return("Signin first")
        }else if (flag == false && flag1 == false){
            console.log(`Welcome ${req.payload.email}`)
            var token = jwt.sign(req.payload.email,"seckret_key")
            return(token)
        }

    },

    async get (req,reply)  {
        token = req.headers.authorization
        if (Middle(token)) {
            const res = await signup.find({})
            return(res)
        }else {
            return ("Oops! you are not admin...")
        }
    },

    async getName (req,res)  {
        token = req.headers.authorization
        if (Middle(token)) {
            const result = await signup.find({email : req.params.email})
            return(result)
        }else {
            return ("Oops! you are not admin...")
        }
    },

    Blog  (req,res) {
        token = req.headers.authorization
        if (Middle(token)) {
            const result = Blog.create(req.payload)
            return(result)
        }else {
            return ("Oops! you are not admin...")
        }
    },

    put  (req,res) {
        token = req.headers.authorization
        if (Middle(token)) {
            const result = Blog.findOneAndUpdate({email : req.params.email}, (req.payload ),{useFindAndModify: false})
            return(result)
        }else {
            return ("Oops! you are not admin...")
        }
    },


    del  (req,res) {
        token = req.headers.authorization
        if (Middle(token)) {
            const result = Blog.findOneAndDelete({email : req.params.email})
            return(result)
        }else {
            return ("Oops! you are not admin...")
        }
    }
}