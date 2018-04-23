var express = require("express");
var mysql=require("mysql")
var bodyParser = require('body-parser');
var router = express.Router();
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'smartisan'
});

connection.connect();
router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json())
router.get('/',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	console.log(request.query.list);
	if(request.query.list=="热门商品"){
		connection.query(`SELECT * FROM hot`, function(error, results, fields){
			response.end(JSON.stringify(results))
		})
	}
	if(request.query.list=="净化器及配件"){
		connection.query(`SELECT * FROM purifier`, function(error, results, fields){
			response.end(JSON.stringify(results))
		})
	}
	if(request.query.list=="坚果 Pro 2及配件"){
		connection.query(`SELECT * FROM por2`, function(error, results, fields){
			response.end(JSON.stringify(results))
		})
	}
	if(request.query.list=="坚果 Pro 及配件"){
		connection.query(`SELECT * FROM pro`, function(error, results, fields){
			response.end(JSON.stringify(results))
		})
	}
	if(request.query.list=="品牌周边"){
		connection.query(`SELECT * FROM periphery`, function(error, results, fields){
			response.end(JSON.stringify(results))
		})
	}
	if(request.query.list=="品牌精选"){
		connection.query(`SELECT * FROM boutique`, function(error, results, fields){
			response.end(JSON.stringify(results))
		})
	}
})

module.exports = router;