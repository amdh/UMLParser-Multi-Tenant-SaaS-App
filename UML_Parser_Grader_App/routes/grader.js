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
                recordIDFromTenant = results.insertId ;
               insertIntoTenantDataT1(req,recordIDFromTenant);

                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertIntoTenantDataT1 = function (req,recordIDFromTenant) {

    var rec_id =  recordIDFromTenant+ "-TA1"
    console.log("insertIntoTenantData");
    var CommonTenantDataInsertQuery = "INSERT INTO tenant_data ( record_id, tenant_id , tenant_table, column_1, column_2, column_3, column_4 ,column_5, column_6) " +
        " VALUES ('" +
        rec_id+
        "','" + "TA-1" +
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
    },CommonTenantDataInsertQuery);
};

var submitGradesT2 = function (req, res) {
    console.log("submitGrades t2");
    console.log("submitGrades");
    var recordIDFromTenant = 0;
    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( name ,  studentid, grading , commnets, university) VALUES ('" +
        req.body.tenant_name +
        "','" + req.body.studentid +
        "','" + req.body.grade +
        "','" + req.body.gradecomments +
        "','" + req.body.univ + "')";



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
                recordIDFromTenant = results.insertId ;
                insertIntoTenantDataT2(req,recordIDFromTenant);

                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertIntoTenantDataT2 = function (req,recordIDFromTenant) {

    var rec_id =recordIDFromTenant + "-TA2";
    console.log("insertIntoTenantData");
    var CommonTenantDataInsertQuery = "INSERT INTO tenant_data ( record_id, tenant_id , tenant_table, column_1, column_2, column_3, column_4 ,column_5, column_6, column_7) " +
        " VALUES ('" +
         rec_id+
        "','" + "TA-2" +
        "','" + req.body.tenant_table +
        "','" + recordIDFromTenant +
        "','" + "tenant 2 data" +
        "','" +req.body.tenant_name +
        "','" + req.body.studentid +
        "','" + req.body.grade +
        "','" + req.body.gradecomments +
        "','" + req.body.univ +"')";

    console.log("QUERY to enter tenant data is: " + CommonTenantDataInsertQuery);

    mysql.fetchData(function(err, results) {
        console.log(results);
    },CommonTenantDataInsertQuery);
};

var submitGradesT3 = function (req, res) {
    console.log("submitGrades t3");
    var recordIDFromTenant = 0;
    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( name ,  studentid, grading , comments) VALUES ('" +
        req.body.tenant_name +
        "','" + req.body.studentid +
        "','" + req.body.grade +
        "','" + req.body.gradecomments + "')";



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
                recordIDFromTenant = results.insertId ;
                insertIntoTenantDataT3(req,recordIDFromTenant);

                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertIntoTenantDataT3 = function (req,recordIDFromTenant) {

    var rec_id =recordIDFromTenant + "-TA3";
    console.log("insertIntoTenantData");
    var CommonTenantDataInsertQuery = "INSERT INTO tenant_data ( record_id, tenant_id , tenant_table, column_1, column_2, column_3, column_4 ,column_5 , column_6) " +
        " VALUES ('" +
        rec_id +
        "','" + "TA-3" +
        "','" + req.body.tenant_table +
        "','" + recordIDFromTenant +
        "','" + "tenant 3 data" +
        "','" +req.body.tenant_name +
        "','" + req.body.studentid +
        "','" + req.body.grade +
        "','" + req.body.gradecomments  +"')";

    console.log("QUERY to enter tenant data is: " + CommonTenantDataInsertQuery);

    mysql.fetchData(function(err, results) {
        console.log(results);
    },CommonTenantDataInsertQuery);
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
                    "statusCode" : 401
                };
                res.send(json_responses);

            } else {

                console.log("tenant details inserted!");
                json_responses = {
                    "statusCode" : 200
                };
                var recordIDFromTenant = results.insertId ;
                insertIntoTenantDataT3(req,recordIDFromTenant);
                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertIntoTenantDataT4 = function (req,recordIDFromTenant) {
var rec_id = recordIDFromTenant + "-TA4";
    console.log("insertIntoTenantData");
    var CommonTenantDataInsertQuery = "INSERT INTO tenant_data ( record_id, tenant_id , tenant_table, column_1, column_2, column_3 ,column_5 , " +
        "column_6 , column_7 , column_8 , column_9) " +
        " VALUES ('" +
        rec_id +
        "','" + "TA-4" +
        "','" + req.body.tenant_table +
        "','" + recordIDFromTenant +
        "','" + "tenant 4 data" +
        "','" +req.body.tenant_name +
        "','" + req.body.located_at +
        "','" + req.body.studentid +
        "','" + req.body.studentname +
        "','" + req.body.grade +
        "','" + req.body.gradecomments  +"')";

    console.log("QUERY to enter tenant data is: " + CommonTenantDataInsertQuery);

    mysql.fetchData(function(err, results) {
        console.log(results);
    },CommonTenantDataInsertQuery);
};

//following function takes care of cross origin requests. this is because chrome blocks
//requests made to servers of other origins
var all = function(req, res, next) {
    // add details of what is allowed in HTTP request headers to the response headers
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    // the next() function continues execution and will move onto the requested URL/URI
    next();
};

var options = function(req, res) {
    res.sendStatus(200);
};

module.exports = {
    submitGradesT1  , submitGradesT2 , submitGradesT3 , submitGradesT4 , all , options
};

