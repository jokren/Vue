// 公用服务器  端口
var express = require('express');
var multer = require('multer');
var mysql = require("mysql")
var bodyParser = require('body-parser');
var router = express.Router();



var app = express();



//产品
app.use('/product',require('./product.js'))
//详情
app.use('/detail',require('./detail.js'))
//购物车
app.use('/cart',require('./cart.js'))
//注册
app.use('/register',require('./register.js'))
//登录
app.use('/login',require('./login.js'))
//个人中心
app.use('/person',require('./person.js'))
//账户详情
app.use('/zhxq',require('./zhxq.js'))

app.listen(8888);
console.log("开启服务器");