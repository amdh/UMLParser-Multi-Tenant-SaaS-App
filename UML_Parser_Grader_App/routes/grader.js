var express = require('express');
var router = express.Router();
var mysql = require('./database');


var submitGrades = function (req, res) {
    console.log("submitGrades");

    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( name , located_at , studentID, studentName, grading , comments) VALUES ('" +
        req.body.tenant_name +
        "','" + req.body.located_at +
        "','" + req.body.studentid +
        "','" + req.body.studentname +
        "','" + req.body.grade +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant details is: " + TenantInsertQuery);

    mysql.fetchData(function(err, results) {

        if (err) {
            throw err;
        } else {
            if (results.length > 0) {

                console.log("something went wrong!");
                var json_responses = {
                    "statusCode" : 200
                };
                res.send(json_responses);

            } else {

                console.log("tenant details inserted!");
                json_responses = {
                    "statusCode" : 401
                };
                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

module.exports = {
    submitGrades
};

