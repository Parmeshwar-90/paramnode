var express = require('express');								//create a new express app
var exphbs = require('express-handlebars');
var router = express.Router();									//use express 4.0 router to define routes
var bodyParser = require('body-parser'); 						//pull information from html post
//var cookieParser = require('cookie-parser');
var http = require('http');
var path = require('path');
var winston = require('winston');

var app = express();

var page1 = require('./routes/page1');
var jadhav = require('./routes/neeraj');
var page3 = require('./routes/page3');
var form = require('./routes/form');
var user = require('./routes/user');
var quote = require('./routes/quotes');
var flagChecks = require('./config/checkFlag1');
var news = require('./routes/news');
var email = require('./routes/email');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));		//set the app engine and default layout name 'main'

app.set('port', process.env.PORT || 8000);						//set port to either environment port OR 8080
app.set('views', path.join(__dirname, 'views')); 				//by default, express expects its template files to be in the views folder. In case you have a different path, you can update it here.
app.set('view engine', 'handlebars');							//define the view engine

//app.use
app.use(express.static(path.join(__dirname, 'public')));		//declares the location of static resources (css, js ,images)
app.use(bodyParser.urlencoded({extended:true}));            	// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
//app.use(cookieParser()); 										// read cookies (needed for auth)


// app.get('/page3', function(req, res) {
//   var name = req.param('name');
//   var email = req.param('email');
//   var message = req.param('message');  

//   res.send(name + ' ' + email + ' ' + message);
// });

app.use('/page1', page1);
app.use('/page2', jadhav);//
app.use('/page2', function(req,res,next){
	if(!flagChecks.checkFlag1(app)) {
		res.render('error');
		return;
	}
	winston.log('info', flagChecks.constantString);
	next();
}, function(req, res, next){
	if(!flagChecks.checkFlag2(app)) {
		res.redirect('/error');
		return;
	}
	next();
}, jadhav);
app.use('/page3', page3);

app.use('/user', user);
app.use('/quote', quote);
app.use('/news', news);
app.use('/email', email);

app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	// next(err);
	res.render('error', {
		layout : 'layout2'
	});
});

process.on('uncaughtException', function (err) {
	winston.log('info', '-------------- UNCAUGHT EXCEPTION: ' + err);
	winston.log('info', '------------- ERROR STACK -------------');
	winston.log('info', err.stack);
	winston.log('info', '---------------------------------------');
});

//create server and listen to the port
http.createServer(app).listen(app.get('port'), function(){
	winston.log('info', 'The server has started');
});

module.exports = app;
