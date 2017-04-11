var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('page1', {
		header : 'this is the header',
		title : 'Page1 title'
	});
});


module.exports = router;
