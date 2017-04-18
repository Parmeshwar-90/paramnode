var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('info', {
		title : 'Info Page',
	});
});

module.exports = router;
