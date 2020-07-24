const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});


let mailOptions = {
    from: '',
    to: '',
    subject: 'Testing Nodemailer',
    text: 'this is a test'
}

