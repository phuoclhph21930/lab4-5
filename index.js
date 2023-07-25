var express = require('express');
var path = require('path');
var app = express();
var multer = require("multer");
const handlebars = require ('express-handlebars');

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
// app.get('/', function(req, res){
//     res.end('da lam xong bai 1');
// });

app.get('/', function(req, res){
    res.render('home');
});
app.listen(process.env.PORT||'3000');
