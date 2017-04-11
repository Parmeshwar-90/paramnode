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

app.engine('handlebars', exphbs({defaultLayout: 'main'}));		//set the app engine and default layout name 'main'

app.set('port', process.env.PORT || 8000);						//set port to either environment port OR 8080
app.set('views', path.join(__dirname, 'views')); 				//by default, express expects its template files to be in the views folder. In case you have a different path, you can update it here.
app.set('view engine', 'handlebars');							//define the view engine

//app.use
app.use(express.static(path.join(__dirname, 'public')));		//declares the location of static resources (css, js ,images)
app.use(bodyParser.urlencoded({extended:true}));            	// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
//app.use(cookieParser()); 										// read cookies (needed for auth)


app.get('/page3', function(req, res) {
  var name = req.param('name');
  var email = req.param('email');
  var message = req.param('message');  

  res.send(name + ' ' + email + ' ' + message);
});

app.use('/page1', page1);
app.use('/page2', jadhav);
app.use('/page3', page3);

//create server and listen to the port
http.createServer(app).listen(app.get('port'), function(){
	winston.log('info', 'The server has started');
});

module.exports = app;
