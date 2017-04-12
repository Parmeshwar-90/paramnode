var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', myfunction);

function myfunction(req, res){
	var sourceData = '';
	var sArr = '';
	var options = {
	url: 'https://newsapi.org/v1/sources?language=en',
	};

	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			sourceData = body;
			j = JSON.parse(sourceData)
			
			res.render('news', {
			title : 'News Title',
			data: sourceData,
			sArr : j.sources
			});
			
		}
	});

	
}

router.post('/sources', function(req, res){
	var options = {
	url: 'https://newsapi.org/v1/sources?language=en',
	};

	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log("==>"+JSON.stringify(body));
			res.send(JSON.stringify(body));
		}
	});
});

router.post('/getnews', function(req, res){
	var key = req.body.key;
	var options = {
		url: 'https://newsapi.org/v1/articles?source='+key+'&apiKey=ea4d2ea7fff74fa0ade6c2b56e7f5640',
	};
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			//console.log("==>"+JSON.stringify(body));
			res.send(JSON.stringify(body));
		}
	});;
});

module.exports = router;
