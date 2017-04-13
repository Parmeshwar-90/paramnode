var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var empData = '';

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'employee'
});
 
connection.connect();

connection.query('SELECT * From employees WHERE 1', function (error, results, fields) {
  if (error) throw error;
  empData = results;
});

connection.query('INSERT INTO employees (name, designation, date_of_joining) VALUES ("Sagar", "Angular Js Developer", "2017-04-03")', function (error, results, fields) {
  if (error) throw error;

});

router.get('/', function(req, res){
	res.render('page1', {
		header : 'this is the header',
		title : 'Page1 title',
		empData : empData
	});
});
 
connection.end();


module.exports = router;
