exports.checkFlag1 = function(app) {
	return app.get('showPage2');
}

exports.checkFlag2 = function(app) {
	return app.get('anotherCheck');
}

exports.constantString = 'hi, this is just a string';
