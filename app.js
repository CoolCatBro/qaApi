'use strict'; //Catch error for sideeffects

//Export express
var express = require('express');
var app = express();
var routes = require('./routes');

//Use json bodypraser
var jsonParser = require('body-parser').json;
var logger = require("morgan");

app.use(logger('dev'));
app.use(jsonParser());

//Middlewares handle by routes module
app.use('/questions',routes);

//catch 404 and foward to error handler
app.use(function(req,res,next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

//Listening on port 3000
var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening on '+port);
});