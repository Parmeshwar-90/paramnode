var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('shc', {
		title : 'Form Page',
	});
});

router.post('/show', function(req, res){
	var by_time_slot = req.body.by_time_slot;
	var by_time_frequncy = req.body.by_time_frequncy;
	if(by_time_slot > 0){
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
			day_iteration : req.body.day_iteration,
			by_time_slot : req.body.by_time_slot,
		});
	}
	if(by_time_frequncy > 0){
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
			day_iteration : req.body.day_iteration,
			by_time_frequncy : req.body.by_time_frequncy
		});
	}
});


module.exports = router;
