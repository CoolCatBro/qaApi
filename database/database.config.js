'use strict';

//The project will be onlu using low level driver for my sql.
//ORM can also be implemented for scalbilty purpose

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
+----------+------------------+------+-----+---------+----------------+
| Field    | Type             | Null | Key | Default | Extra          |
+----------+------------------+------+-----+---------+----------------+
| qID      | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| question | text             | NO   |     | NULL    |                |
+----------+------------------+------+-----+---------+----------------+

answers
+--------+------------------+------+-----+---------+----------------+
| Field  | Type             | Null | Key | Default | Extra          |
+--------+------------------+------+-----+---------+----------------+
| aID    | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| answer | text             | NO   |     | NULL    |                |
| vote   | int(11)          | NO   |     | NULL    |                |
| qID    | int(10) unsigned | NO   | PRI | NULL    |                |
+--------+------------------+------+-----+---------+----------------+

*/