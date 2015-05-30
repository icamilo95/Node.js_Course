var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");



app.get('/first', function(req,res){
   request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
      var data = JSON.parse(body);
      var newArr = [];
      for (var i = 0; i < data.length; i++) {
         newArr.push(data[i].firstname);
      }

      res.render("index", {
            datas: newArr
         });      
      
   });
});


app.get('/last', function(req,res){
   request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
      var data = JSON.parse(body);
      var newArr = [];
      for (var i = 0; i < data.length; i++) {
         newArr.push(data[i].lastname);
      }

      res.render("index", {
            datas: newArr
         });      
      
   });
});


app.get('/all', function(req,res){
   request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
      var data = JSON.parse(body);
      var newArr = [];
      for (var i = 0; i < data.length; i++) {
         newArr.push(data[i]);
      }

      res.render("all", {
            datas: newArr
         });      
      
   });
});




app.listen(3000);