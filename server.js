

var express = require("express");
var app=express()
var expressLayouts = require("express-ejs-layouts");
var indexRoutes=require('./routes/index');
var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true,useUnifiedTopology: true});
let db = mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',()=>{console.log("Mongoose connected successfully")})

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// app.use("expressLayouts");
// app.use('layout','layouts/layout',)

app.use(express.static("public"))
app.use('/',indexRoutes)
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running at port 3000")
})