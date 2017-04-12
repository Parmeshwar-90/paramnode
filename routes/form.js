var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('form', {
		title : 'Form Page',
		header : 'Please fill out this form'
	});
});

router.post('/add', function(req, res){
	res.json({
		fname : req.body.fname,
		lname : req.body.lname,
		email : req.body.email,
		pwd : req.body.pwd
	});

	// res.render('page2', {
	// 	fname : req.body.fname,
	// 	lname : req.body.lname,
	// 	email : req.body.email,
	// 	pwd : req.body.pwd
	// });
});

module.exports = router;
