var express = require('express'); //It imports the express module
var app = express(); // app is an instance of express


app.get('/add/:num1/:num2', function(req,res){
   var result = parseInt(req.params.num1) + parseInt(req.params.num2);
   res.send("Sum = " + result );
});

app.get('/sub/:num1/:num2', function(req,res){
   var result = parseInt(req.params.num1) - parseInt(req.params.num2);
   res.send("Sub = " + result );
});

app.get('/mult/:num1/:num2', function(req,res){
   var result = parseInt(req.params.num1) * parseInt(req.params.num2);
   res.send("Multiplication = " + result );
});

app.get('/div/:num1/:num2', function(req,res){
   var result = parseInt(req.params.num1) / parseInt(req.params.num2);
   res.send("Division Result = " + result );
});


app.listen(3000);