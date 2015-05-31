var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");


app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({
    extended:true
}));


app.get('/first', function(req,res){
   request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
      var data = JSON.parse(body);
      var newArr = [];
      for (var i = 0; i < data.length; i++) {newArr.push(data[i].firstname);}
      res.render("index", {
            datas: newArr
         });      
   });
});


app.get('/last', function(req,res){
   request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
      var data = JSON.parse(body);
      var newArr = [];
      for (var i = 0; i < data.length; i++) {newArr.push(data[i].lastname);}
      res.render("index", {
            datas: newArr
         });      
      
   });
});


app.get('/all', function(req,res){
   request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
      var data = JSON.parse(body);
      var newArr = [];
      for (var i = 0; i < data.length; i++) {newArr.push(data[i]);}
      res.render("all", {
            datas: newArr
         });      
   });
});


app.get('/new', function (req,res){
   res.render('newUser');
});

app.post("/new", function(req, res) {
    request({
        method: "POST",
        uri: "http://daretodiscover.herokuapp.com/users",
        formData: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            age: req.body.age
        }
    }, function(error, response, body) {
        res.redirect("/all");
    });
});


app.post("/new", function(req, res) {
    request({
        method: "POST",
        uri: "http://daretodiscover.herokuapp.com/users",
        formData: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            age: req.body.age
        }
    }, function(error, response, body) {
        res.redirect("/all");
    });
});

app.get("/edit/:id", function(req, res) {
   request("http://daretodiscover.herokuapp.com/users/" + req.params.id, function(error, response, body) {
      res.render("edit", {
         userInfo: JSON.parse(body)
      });
   });
});



app.listen(3000);
















