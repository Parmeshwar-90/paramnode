var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('page3', {
		header : 'this is the header for page3',
		title : 'Page3 title'
	});
});




module.exports = router;
