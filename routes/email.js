'use strict';
var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');



router.get('/', function(req, res){
	res.render('email', {
		title : 'Email Page',
		header : ''
	});
});

router.post('/emailsend', function(req, res){
	var to_email = req.body.to_email;
	var subject = req.body.subject;
	var message = req.body.message

	res.json({
		to_email : req.body.to_email,
		subject : req.body.subject,
		message : req.body.message
	});
	
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'parmeshwarpatil956@gmail.com',
        pass: 'prashant12345'
    }
	});

	// setup email data with unicode symbols
	let mailOptions = {
	    from: '"Parmeshwar 👻" <parmeshwarpatil956@gmail.com>', // sender address
	    to: to_email, // list of receivers
	    subject: subject, // Subject line
	    text: message, // plain text body
	    attachments: [
        {   // file on disk as an attachment
            filename: 'myattachment.txt',
            path: '/home/perennial/node-training/paramnode/public/attachment/text1.txt' // stream this file

            // utf-8 string as an attachment
            // filename: 'text1.txt',
            // content: 'hello world!'
        },
    ]
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});

});

module.exports = router;
