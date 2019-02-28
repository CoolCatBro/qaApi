'use strict';

var models = new function() {

    var question = (function() {
    
        function question(text){
            this.qID = 0;
            this.text = text;
        }
    return question;
}());


    var answer =(function() {

        function answer(qID,text){
            this.aID = 0;
            this.text = text;
            this.qID = qID;
        }
    return answer;
}());
}

module.exports = models;
