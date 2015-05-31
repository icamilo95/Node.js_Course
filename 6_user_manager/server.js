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
//Set up method override --> It helps the form to set the put and delete 
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "ejs");


app.get('/', function(req,res){
   models.User.findAll().done(function(users, error){
      res.render("index", {
         allUsers: users
      });   
   });   
});

app.get('/new', function(req,res){
   res.render("new");
});

app.get('/edit/:id', function(req,res){
   models.User.findById(req.params.id).done(function(user) {
      res.render("edit", {
         userInfo: user
      });
   });
});

app.put('/edit/:id', function(req,res){
   models.User.findById(req.params.id).done(function(user) {
      user.updateAttributes({
        firstname:req.body.firstname,
        lastname:req.body.lastname,    
        username:req.body.username,
        age:req.body.age,
      }).done(function(){
      res.redirect("/");
   });
   });
});

app.post('/new', function(req,res){
   models.User.create ({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      username: req.body.username
   }).done(function(){ // I put this callback here cause JS is asynchronous so it'll do this inmediately after getting the information
      res.redirect("/");
   });
});









app.listen(3000);