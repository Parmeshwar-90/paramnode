var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('studentview', {
		title : 'Student View',
	});
});

module.exports = router;
