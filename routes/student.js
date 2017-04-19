var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var studentData = '';
var student_row = '';
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'db_student_mgmt'
});

connection.connect();

connection.query('SELECT * From tbl_student WHERE is_active = 1 And is_delete = 0', function (error, results, fields) {
  if (error) throw error;
  studentData = results;
});

router.get('/', function(req, res){

// connection.query('SELECT * From tbl_student WHERE is_active = 1 And is_delete = 0', function (error, results, fields) {
//   if (error) throw error;
//   studentData = results;
// })

	res.render('student', {
		title : 'student',
		studentData : studentData
	});
});

router.get('/studentview/:id', function(req, res){
	var id = req.params.id;
	connection.query('SELECT * From tbl_student WHERE is_active = 1 And is_delete = 0 And student_id = '+id, function (error, results, fields) {
		if (error) throw error;
		  student_row = results;
		  console.log("==>"+results);
	});
	res.render('studentview', {
		title : 'student',
		student_row : student_row
	});
});

router.post('/add', function(req, res){
	var student_fname = req.body.stud_fname;
	var student_mname = req.body.stud_mname;
	var student_lname = req.body.stud_lname;
	var student_address = req.body.stud_address;
	var student_dob = req.body.stud_dob;
	var student_standerd = req.body.stud_std;
	connection.query('INSERT INTO tbl_student (student_fname,student_mname,student_lname,student_dob,student_address,student_standerd) VALUES ("'+student_fname+'", "'+student_mname+'", "'+student_lname+'","'+student_dob+'","'+student_address+'","'+student_standerd+'")', function (error, results, fields) {
	  if (error) throw error;

	});
	//console.log(stud_fname+" in post : "+stud_mname+" "+stud_lname+" "+stud_address+" "+stud_dob+" "+stud_std);
	// res.render('student', {
	// 	title : 'student',
	// });
	res.redirect("/student");
});

module.exports = router;