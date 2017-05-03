/*var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
AWS.config.update({ accessKeyId: '...', secretAccessKey: '...' });*/

var app = angular.module("umlParserGraderApp", ["ngRoute", "angularFileUpload"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/umlparsergrader", {
            templateUrl : "templates/login.html"
        })
        .when("/grader", {
            templateUrl : "templates/grader.html"
        })

    .otherwise({ redirectTo: 'templates/login' });
});

app.controller('loginController', function($scope, $route , $location, $window){

    console.log('loginController');
    $scope.master = {}


    $scope.reset = function() {
        $scope.username = '';
        $scope.passwd = '';
    };

    $scope.login = function () {

        console.log('loginController');
        var uname = $scope.username;
        var pwd = $scope.passwd;

        if( uname == 'grader' && pwd == 'uml123'){
            console.log("login successfull")
            $scope.msg = 'Login successfull';
            setTimeout($route.reload(), 20000);
            //$location.path('/grader');
            $window.location.href = 'templates/grader.html';
        }else{
            $scope.msg = 'Login unsuccessfull';
            $scope.reset();
        }
    }

});

app.controller('graderController',function ($scope) {
    console.log("grader controller");

    $scope.msg=''

    $scope.tenants =[{
        'title' : 'tenant1',
        'id' :1,
        'name' : 'Umang'
         },
        {
            'title' : 'tenant2',
            'id' :2,
            'name' : 'Kaushik'
        },
        {
            'title' : 'tenant3',
            'id' :3,
            'name' : 'Chetan'
        },
        {
            'title' : 'tenant4',
            'id' :4,
            'name' : 'Fang'
        }]

    $scope.uploadFile = function () {

            console.log("uploadFile");
        $scope.fileSelected = function(files) {
            if (files && files.length) {
                $scope.file = files[0];
            }

            $upload.upload({
                url: '/api/upload',//node.js route
                file: $scope.file
            })
                .success(function(data) {
                    console.log(data, 'uploaded');
                });

        };
    };


    // Read in the file, convert it to base64, store to S3
   /* fs.readFile('del.txt', function (err, data) {
        if (err) {
            throw err;
        }

        var base64data = new Buffer(data, 'binary');

        var s3 = new AWS.S3();
        s3.client.putObject({
            Bucket: 'banners-adxs',
            Key: 'del2.txt',
            Body: base64data,
            ACL: 'public-read'
        }, function (resp) {
            console.log(arguments);
            console.log('Successfully uploaded package.');
        });
    });*/
});