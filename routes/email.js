'use strict';
var express = require('express');
const fileUpload = require('express-fileupload');
var session = require('express-session');
var router = express.Router();

const nodemailer = require('nodemailer');
router.use(fileUpload());

var sessionOptions = {
  secret: "secret",
  resave : true,
  saveUninitialized : false
};

router.use(session(sessionOptions));


router.get('/', function(req, res){

	if ( !req.session.views){
	    req.session.views = 1;
	  }else{
	    req.session.views += 1;
	  }

	res.render('email', {
		title : 'Email Page',
		header : 'Page View Count : '+req.session.views,
	});
});

router.post('/emailsend', function(req, res){
	var to_email = req.body.to_email;
	var subject = req.body.subject;
	var message = req.body.message
	req.session.email = req.body.to_email

	res.json({
		to_email : req.body.to_email,
		subject : req.body.subject,
		message : req.body.message
	});

	if (!req.files)
    	return res.status(400).send('No files were uploaded.');
		 
	  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
	  let sampleFile = req.files.sampleFile;
	  console.log(sampleFile);
	 
	  // Use the mv() method to place the file somewhere on your server 
	  sampleFile.mv('/home/perennial/node-training/paramnode/public/attachment/'+sampleFile, function(err) {
	    if (err)
	      return res.status(500).send(err);
	 
	    res.send('File uploaded!');
	  });
	
	if(to_email != '' && subject != '' && message != ''){
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
		// transporter.sendMail(mailOptions, (error, info) => {
		//     if (error) {
		//         return console.log(error);
		//     }
		//     console.log('Message %s sent: %s', info.messageId, info.response);
		// });
	}else{
		console.log('Please enter toemail subject and data ');
	}

});

module.exports = router;
