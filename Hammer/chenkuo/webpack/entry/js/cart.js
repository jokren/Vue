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


//查增
router.post('/', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    var data = ""
    var params;
    request.on("data", function(chunk){
        data += chunk;
    })
    request.on("end", function(){
        params = querystring.parse(data);
        console.log(params);
        connection.query('select * from `cart` ', function(error, res, fields){
            var results=JSON.parse(res)
            //用户相同 且商品name一样 则添加num
            for(var i = 0; i < results.length; i++){
                if(results[i].tel == params.tel && results[i].name == params.name){
                    var num = results[i].num + params.num
                    connection.query('UPDATE details SET num=' + num + ' WHERE ? ', {
                        tel : results[i].tel,
                        name : results[i].name
                    }, function(error, results, fields){

                    })
                    return
                }
            }
            connection.query('INSERT INTO `cart` SET ?', {
                tel:params.tel,
                name:params.name,
                color:params.color,
                newprice:params.newprice,
                oldprice:params.oldprice,
                imgsrc:params.imgsrc,
                num:params.num
            }, function(error, results, fields){

            })
        })


    })
})


module.exports = router;