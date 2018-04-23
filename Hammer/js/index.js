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
var hot,pro2,pro,periphery,boutique
router.get('/hot',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	connection.query(`SELECT * FROM hot`, function(error, results, fields){
		hot=results
		connection.query(`SELECT * FROM por2`, function(error, results, fields){
			pro2=results
			connection.query(`SELECT * FROM pro`, function(error, results, fields){
				pro=results
				connection.query(`SELECT * FROM periphery`, function(error, results, fields){
					periphery=results
					connection.query(`SELECT * FROM boutique`, function(error, results, fields){
						boutique=results
						response.end(JSON.stringify({hot,pro2,boutique,periphery}))
					})
				})
			})
		})
	})
})

module.exports = router;