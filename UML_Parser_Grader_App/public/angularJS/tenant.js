var tenant = angular.module('tenantApp', [ 'ngRoute' ]);

tenant.controller("gradeController", function($scope, $http) {
    console.log("inside tenant controller");
});

tenant.config(function($routeProvider) {
    console.log("inside tenant route provider");

    $routeProvider.when("/tenant1", {
        templateUrl : "/templates/tenant1.html",
        controller : "tenant1_controller"

    }).when("/tenant2", {
        templateUrl : "/templates/tenant2.html",
        controller : "tenant2_controller"

    }).when("/tenant3", {
        templateUrl : "/templates/tenant3.html",
        controller : "tenant3_controller"

    }).when("/tenant4", {
        templateUrl : "/templates/tenant4.html",
        controller : "tenant4_controller"
    });

});

tenant.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

tenant.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl, callbackfunc){
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined/*,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Origin, X-Requested-With, Accept'*/}
        })
            .success(function(data){
                console.log("returnign from upload");
                console.log(data);

                callbackfunc(data);
            })

            .error(function(){
            });
    }
}]);

tenant.controller("tenant1_controller",['$scope','$http', 'fileUpload', '$route', function($scope,$http, fileUpload , $route){
    console.log("tenant1_controller");
    $scope.graderChecked = true;
    $scope.msg = 'Grading!!'

    console.log($scope.form1);
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://personal-project-1487156523.us-west-2.elb.amazonaws.com/tenant1 ";
            //"http://ec2-35-164-135-163.us-west-2.compute.amazonaws.com:5001/api/upload";//
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.reset = function(){
        $scope.myFile = "";
        $scope.umlimg = "";
        $scope.msg = " Grading !!";
        $scope.studentname = "";
        $scope.grade = "";
        $scope.gradecomments = "";
    }

    $scope.submitGrades = function(){
        console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "TA-1",
            "tenant_table" : "tenant_1_umang",
            "tenant_name" :"Umang",
            "studentname" : $scope.studentname,
            "grade" : $scope.grade,
            "gradecomments" : $scope.gradecomments
        }

        $http({
            method : "POST",
            url : '/callgraderT1',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            console.log(data);
            $scope.msg = " Grading completed";
           // $scope.form1.reset();
           // $scope.form2.reset();
            //setTimeout($route.reload(), 20000);

        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);



tenant.controller("tenant2_controller",['$scope','$http', 'fileUpload', '$route',function($scope,$http, fileUpload , $route){
    console.log("tenant2_controller");
    $scope.graderChecked = true;
    $scope.msg = 'Grading!!'
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://personal-project-1487156523.us-west-2.elb.amazonaws.com/tenant2";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.reset = function(){
        setTimeout($route.reload(), 20000);
        $scope.myFile = "";
        $scope.umlimg = "";
        $scope.msg = " Grading !!";
        $scope.studentid = "";
        $scope.univ = "";
        $scope.grade = "";
        $scope.gradecomments = "";
    }

    $scope.submitGrades = function(){
        console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "TA-2",
            "tenant_table" : "tenant_2_kaushik",
            "tenant_name" :"Kaushik",
            "located_at" : "SJSU", //location
            "studentid" : $scope.studentid,
            "univ" : $scope.univ,
            "grade" : $scope.grade,
            "gradecomments" : $scope.gradecomments
        }

        $http({
            method : "POST",
            url : '/callgraderT2',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            $scope.msg = " Grading completed";


        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);


tenant.controller("tenant3_controller",['$scope','$http', 'fileUpload', '$route', function($scope,$http, fileUpload, $route){
    console.log("tenant3_controller");
    $scope.graderChecked = true;
    $scope.msg = 'Grading!!'
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://personal-project-1487156523.us-west-2.elb.amazonaws.com/tenant3";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.reset = function(){
        setTimeout($route.reload(), 20000);
        $scope.myFile = "";
        $scope.umlimg = "";
        $scope.msg = " Grading !!";
        $scope.studentid = "";
        $scope.grade = "";
        $scope.gradecomments = "";
    }

    $scope.submitGrades = function(){
        console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "TA-3",
            "tenant_table" : "tenant_3_chetan",
            "tenant_name" :"Chetan",
            "located_at" : "SJSU", //location
            "studentid" : $scope.studentid,
            "studentname" : $scope.studentname,
            "grade" : $scope.grade,
            "gradecomments" : $scope.gradecomments
        }

        $http({
            method : "POST",
            url : '/callgraderT3',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            $scope.msg = " Grading completed";


        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);

tenant.controller("tenant4_controller",['$scope','$http', 'fileUpload', '$route', function($scope,$http, fileUpload , $route){
    console.log("tenant4_controller");
    $scope.graderChecked = true;
    $scope.msg = 'Grading!!'
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://personal-project-1487156523.us-west-2.elb.amazonaws.com/tenant4";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.reset = function(){
        setTimeout($route.reload(), 20000);
        $scope.myFile = "";
        $scope.umlimg = "";
        $scope.msg = " Grading !!";
        $scope.studentid = "";
        $scope.studentname = "";
        $scope.grade = "";
        $scope.gradecomments = "";
    }

    $scope.submitGrades = function(){
        console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "TA-4",
            "tenant_table" : "tenant_4_ching",
            "tenant_name" :"Fang",
            "located_at" : "SJSU", //location
            "studentid" : $scope.studentid,
            "studentname" : $scope.studentname,
            "grade" : $scope.grade,
            "gradecomments" : $scope.gradecomments
        }

        $http({
            method : "POST",
            url : '/callgraderT4',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            $scope.msg = " Grading completed";


        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);
