'use strict';

var express = require('express');
var router = express.Router();
var db = require('./database/database');

//Middleware is called on qID path
//The middleware check resource availabilty ie question ,send 404

router.param("qID", function (req, res, next, qID) {
    db.query("select * from questions where qID = " + qID, function (err, result) {
        if (err) throw err;
        if (!Object.keys(result).length) //Check if the json array is empty
        {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.question = result[0];
        return next();
    });
});

//MiddleWare is called on aID path
//The miidleware check for answer

router.param("aID", function (req, res, next, aID) {
    db.query("select * from answers where aID = " + aID, function (err, result) {
        if (err) throw err;
        if (!Object.keys(result).length) //Check if the json array is empty
        {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.answer = result[0];
        return next();
    });
});


//GET /questions
//return all questions

router.get('/', function (req, res) {
    db.query('select * from questions', function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//POST /questions
//submit a question

router.post('/', function (req, res) {
    db.query('insert into questions (question) values ("' + req.body.question + '");', function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//GET /question/qID
//return a specific question

router.get('/:qID', function (req, res) {
    res.json(req.question);
});

//GET /answers
//return all answer for a question

router.get('/:qID/answers', function (req, res) {
    db.query('select * from answers where qID = ' + req.question.qID,
        function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

//POST /answers
//submit a answer

router.post('/:qID/answers', function (req, res) {
    db.query('insert into answers (answer,vote,qID) values ("' + req.body.answer + '",0,"' + req.question.qID + '");',
        function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

//PUT /answer
//update a answer

router.put('/:qID/answers/:aID', function (req, res) {
    db.query('update answers set answer = "' + req.body.answer + '" where aID = ' + req.answer.aID,
        function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

//DELETE /answer
//delete a answer

router.delete('/:qID/answers/:aID', function (req, res) {
    db.query('delete from answers where aID = ' + req.answer.aID,
        function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

//vote for /answer
//upvote or downvote a answer

router.post('/:qID/answers/:aID/vote-:dir',
    function (req, res, next) {
        if (req.params.dir.search(/\b(up|down)\b/) === -1) {
            var err = new Error("Not Found");
            err.status = 404;
            next(err);
        } else {
            req.vote = req.params.dir; //Store vote as param;
            next();
        }
    },
    function (req, res) {
        if (req.vote == "up") {
            db.query('update answers set vote = ' + (req.answer.vote + 1) + ' where aID = ' + req.answer.aID,
                function (err, result) {
                    if (err) throw err;
                    res.json(result);
                });
        } else {
            db.query('update answers set vote = ' + (req.answer.vote - 1) + ' where aID = ' + req.answer.aID,
                function (err, result) {
                    if (err) throw err;
                    res.json(result);
                });
        }
    });


module.exports = router;