/**
 * Created by Amruta on 4/4/2017.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'umlparsergraderdb.cp5q0lue1wmu.us-west-1.rds.amazonaws.com',
    user     : 'root',
    password : 'umlparser',
    database : 'umltenant'
});

connection.connect();
connection.query('SELECT * from users', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
});

connection.end();
