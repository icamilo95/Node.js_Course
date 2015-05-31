//Set up Express
var express = require("express");
var app = express();
//Set up PG and models sequelize
var pg = require("pg"); //It requires the postgresmodel
var models = require("./models/index.js"); 
//Set up body parser to receive form data
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ //This is the middleware, It sets the body parser to work in the middleware
    extended:true
}));

app.set("view engine", "ejs");


app.get('/all', function(req,res){
   res.render("all");
});

app.get('/new', function(req,res){
   res.render("new");
});

app.get('/edit/:id', function(req,res){
   res.render("edit");
});

app.post('/new', function(req,res){
   models.User.create ({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      username: req.body.username
   }).done(function(){ // I put this callback here cause JS is asynchronous so it'll do this inmediately after getting the information
      res.redirect("/all");
   });
});









app.listen(3000);