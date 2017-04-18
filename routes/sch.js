var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('shc', {
		title : 'Form Page',
	});
});

router.post('/show', function(req, res){
	res.render('info', {
		before_breakfast : req.body.before_breakfast,
		before_lunch : req.body.before_lunch,
		before_dinner : req.body.before_dinner,
		before_suffer : req.body.before_suffer,
		after_breakfast : req.body.after_breakfast,
		after_lunch : req.body.after_lunch,
		after_dinner : req.body.after_dinner,
		after_suffer : req.body.after_suffer,
		days : req.body.no_of_days,
		day_iteration : req.body.day_iteration
	});
});


module.exports = router;
