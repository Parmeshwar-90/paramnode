$(document).ready(function(){
	Handlebars.registerHelper('if_eq', function(a, b, opts) {
	    if (a == b) {
	        return opts.fn(this);
	    } else {
	        return opts.inverse(this);
	    }
	});

	Handlebars.registerHelper("formatPhoneNumber", function(phoneNumber) {
		phoneNumber = phoneNumber.toString();
		return "(" + phoneNumber.substr(0,3) + ") " + phoneNumber.substr(3,3) + "-" + phoneNumber.substr(6,4);
	});
});
