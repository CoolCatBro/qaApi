'use strict';

var express = require('express');
var router = express.Router();

var db = require('./database/database');

//GET /questions
//return all questions
router.get('/',function(req,res){
    db.query('select * from questions',function(err,result){
        if(err) throw err;
        res.send(result);
    });
});

//POST /questions
//submit a question
router.post('/:qID', function (req, res) {
});

//GET /answers
//return answers of a question
router.get('/:qID', function (req, res) {
    db.query('select * from questions where qID='+req.params.qID, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

//POST /answer
//submit answer
router.post('/:qID/answers', function (req, res) {
        res.json({
            response: 'post request'
        });
});

//PUT /answer
//update a answer
router.put('/:qID/answers/:aID',function(req,res){
});

//DELETE /answer
//delete a answer
router.delete('/:qID/answers/:aID', function (req, res) {
});

//vote for /answer
//upvote or downvote a answer
router.post('/:qID/answers/:aID/vote-:dir',
function(req,res,next){
    if(req.params.dir.search(/\b(up|down)\b/) === -1){
        var err = new Error("Not Found");
        err.status = 404;
        next(err);
    } else {
        next();
    }
},
function(req,res){
    res.json({
        response: 'post request'
    });
});


module.exports = router;