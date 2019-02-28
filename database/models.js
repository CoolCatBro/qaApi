'use strict';

//The use of model is to act as a base for new question and answer

var models = new function() {

    var question = (function() {
    
        function question(text){
            this.text = text;
        }
    return question;
}());


    var answer =(function() {

        function answer(qID,text){
            this.qID = qID;
            this.text = text;
            this.vote= 0;
        }
    return answer;
}());
}

module.exports = models;
