'use strict'; //Catch error for sideeffects

//Export express
var express = require('express');
var app = express();

//Export routes
var routes = require('./routes');

//Use bodypraser
//Multer can even be added to handle file uplaod
var bodyParser = require('body-parser');
var logger = require("morgan");

app.use(logger('dev'));     //Log request performed
app.use(bodyParser.json()); //Parse JSON
app.use(bodyParser.urlencoded({extended:true})); //Parse form data

//Middlewares handle by routes module
app.use('/questions',routes);

//catch 404 and foward to error handler
//Syncronous error can be handle by express auto
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
