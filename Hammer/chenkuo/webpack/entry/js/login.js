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
        // console.log(params);
        connection.query(`SELECT*FROM register WHERE telphone='${params.username}' AND password='${params.password}'`,function(error,results,fields){
            if(results.length>0){
                res.end("1");
                // alert("登陆成功");
            }else{
                res.end("0")
            }

        })
    })
//
})


module.exports = router;