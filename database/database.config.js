'use strict';

//The config of database and table
var config = { 
    host: 'localhost',
    user: 'karan',
    password: 'mkae12000',
    database: 'qA'
}

module.exports = config;

/*Schema
questions
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| qID   | varchar(11) | NO   | PRI | NULL    |       |
| text  | text        | NO   |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+

answers
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| aID   | varchar(11) | NO   | PRI | NULL    |       |
| text  | text        | NO   |     | NULL    |       |
| qID   | varchar(11) | YES  | MUL | NULL    |       |
+-------+-------------+------+-----+---------+-------+
*/