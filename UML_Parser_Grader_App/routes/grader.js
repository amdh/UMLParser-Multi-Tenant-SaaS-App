var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/api/upload', function(req, res , next){
    console.log("upload code called...submit the zip file to s3");
    });

router.post('/api/submitGrade', function(req, res , next){
    console.log("submit grade called...save grades to db");
});

module.exports = router;
