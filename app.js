'use strict';

var express = require("express");
var app = express();
var jsonParser = require("body-parser").json;

var port = process.env.PORT || 3000;

app.use(function(req,res,next){
    next();
});

app.use(jsonParser());

app.listen(port,function(){
    console.log("listening on "+port);
});