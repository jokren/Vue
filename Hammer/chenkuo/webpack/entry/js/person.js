var express=require("express");
var querystring=require("querystring");
var mysql=require("mysql");
var router = express.Router();
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hammer"
});
connection.connect();
router.post("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type","text/plain;charset=UTF-8");
    var data='';
    var params;
    req.on("data",(chunk)=>{
        data+=chunk;
    })
    req.on("end",()=>{
        params = querystring.parse(data);
        console.log(params);
        console.log(params.id_num);
        connection.query(`SELECT*FROM register WHERE telphone='${params.id_num}'`,function(error,results,fields){
            console.log(results);
            var cont = JSON.stringify(results);
            console.log(cont);
            res.end(cont);
        })
    })
//
})

module.exports = router;