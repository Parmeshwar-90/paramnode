var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('page2', {
		layout : 'layout2',
		header : 'this is the header for layout 2',
		title : 'Page2 title'
	});
});

module.exports = router;
