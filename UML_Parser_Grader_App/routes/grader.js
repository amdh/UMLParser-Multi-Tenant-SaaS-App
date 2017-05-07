var express = require('express');
var router = express.Router();
var mysql = require('./database');

var submitGradesT1 = function (req, res) {
    console.log("submitGrades");
    var recordIDFromTenant = 0;
    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( name ,  studentName, grading , comments) VALUES ('" +
        req.body.tenant_name +
        "','" + req.body.studentname +
        "','" + req.body.grade +
        "','" + req.body.gradecomments +"')";

    var CommonTenantDataInsertQuery = "INSERT INTO tenant_data ( tenant_id , tenant_table, column_1, column_2, column_3, column_4 ,column_5, column_6) " +
        " VALUES ('" +
            "TA-1" +
        "','" + req.body.tenant_table +
        "','" + recordIDFromTenant +
        "','" + "tenant 1 data" +
        "','" +req.body.tenant_name +
        "','" + req.body.studentname +
        "','" + req.body.grade +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant data is: " + CommonTenantDataInsertQuery);

    mysql.fetchData(function(err, results) {
        console.log(results);
        if (err) {
            throw err;
        } else {
            if (results.length > 0) {

                console.log("something went wrong!");
                var json_responses = {
                    "statusCode" : 401
                };
                res.send(json_responses);

            } else {

                console.log("tenant details inserted!");
                json_responses = {
                    "statusCode" : 200
                };
                //on success insert data into table data
                mysql.fetchData(function(err, results) {
                    console.log(results);
                },CommonTenantDataInsertQuery);

                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var submitGradesT2 = function (req, res) {
    console.log("submitGrades t2");
};

var submitGradesT3 = function (req, res) {
    console.log("submitGrades t3");
};

var submitGradesT4 = function (req, res) {
    console.log("submitGrades t4");

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
                console.log(results);
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
    submitGradesT1  , submitGradesT2 , submitGradesT3 , submitGradesT4
};

