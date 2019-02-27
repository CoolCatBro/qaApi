'use strict';

var express = require('express');
var router = express.Router();

//GET /questions
router.get('/:id',function(req,res){
    //return all the questions
    res.json({response: "GET request", id: req.params.id});
});

//POST /questions
router.post('/', function (req, res) {
    //return all the questions
    res.json({
        response: "GET request",
        body: req.body
    });
});

module.exports = router;