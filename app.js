'use strict'; //Catch error for sideeffects

//Export express
var express = require('express');
var app = express();
var routes = require('./routes');

//Use json bodypraser
var jsonParser = require('body-parser').json;
app.use(jsonParser());

//Middlewares handle by routes module
app.use('/questions',routes);


//Listening on port 3000
var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening on '+port);
});