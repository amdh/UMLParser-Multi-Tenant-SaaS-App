var ejs = require('ejs');
var mysql = require('mysql');

// Put your mysql configuration settings - user, password, database and port
function getConnection() {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'rootroot',
        database : 'umlparsergrader',
        port : 3306
    });
    return connection;
}

function fetchData(callback, sqlQuery) {

    console.log("\nMy SQL Query:" + sqlQuery);

    var connection = getConnection();

    connection.query(sqlQuery, function(err, rows, fields) {
        console.log("DB Results:" + rows);
        console.log("fields :" +fields);

        if (err) {
            console.log("ERROR: " + err.message);
        } else { // return err or result
            console.log("DB Results size:" + rows.size);
            callback(err, JSON.stringify(rows));
        }
    });
    console.log("\nConnection closed...");
    connection.end();
}

exports.fetchData = fetchData;