var express = require('express');
var router = express.Router();
var session = require('express-session');


router.get('/', function(req, res){
	sess = req.session;
	res.render('page2', {
		layout : 'layout2',
		header : 'this is the header for layout 2 and session var views is :'+sess.views,
		title : 'Page2 title',
		email : req.session.email
	});
});

module.exports = router;
