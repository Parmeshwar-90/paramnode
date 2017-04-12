var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.json(
		{
			user_id : '345345',
			user_name : 'Neeraj Jadhav',
			user_type : 'Guest',
			author : req.app.get('author')
		}
	);
});

module.exports = router;
