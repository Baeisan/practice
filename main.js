var express = require('express');
var axios = require('axios');
var app = express();

var static = require('serve-static');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

var ejs = require('ejs');
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
  res.render('about.ejs');
});
app.get('/a', function(req, res){
  res.render('fullscreen.ejs');
});
app.get('/b', function(req, res){
  res.render('fullscreen0.ejs');
});
app.get('/1', function(req, res){
  res.render('about-21.ejs');
});
app.get('/2', function(req, res){
  res.render('about-2.ejs');
});
app.get('/3', function(req, res){
  res.render('sector1.ejs');
});
app.get('/4', function(req, res){
  res.render('sector10.ejs');
});
app.listen(3000, function(req, res){
  console.log('Server is Working.')
});
