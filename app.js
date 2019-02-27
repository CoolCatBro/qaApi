var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use(function(req,res,next){
    console.log("First");
    next();
});
//req.querry.color
//url/?color=any
app.use(function (req, res, next) {
    console.log("Second");
    next();
});

app.listen(port,function(){
    console.log("listening on "+port);
});