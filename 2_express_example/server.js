var express = require('express'); //It imports the express module
var app = express(); // app is an instance of express


app.get('/', function (req,res){   //get is a restful route
   res.send("Hello World Camilo");
});

app.get('/greet/:name', function(req,res){
   res.send("Hello " + req.params.name);
});



app.listen(3000);