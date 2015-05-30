var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");


app.get('/greet/:name',function(req,res){
   res.render("index", {
      name: req.params.name
   });
});


app.get('/api', function(req,res){
   request('http://daretodiscover.herokuapp.com/users', function(error,response,body){
      //error (If there is any), resposne , body( the information of the API)
      console.log(response);
      res.send(body);
   });
});


app.listen(3000);

