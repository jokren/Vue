//产品
var express = require('express');
var http = require("http")
var url = require("url")
var mysql = require("mysql")
var querystring = require("querystring")
var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();


var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hammer'
});

connection.connect();


//查
router.post('/', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    connection.query('select * from `product` ', function(error, results, fields){
        // console.log(results);
        var str=JSON.stringify(results)
        response.end(str)
    })

})






module.exports = router;