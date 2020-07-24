const nodemailer = require('nodemailer');
const { $CombinedState } = require('redux');
const {EMAIL, PASSWORD} = process.env;


module.exports = {
    email: async(req, res) => {
        console.log('mail hit1')
        // try/catch is used to handle errors without the use of .then and .catch
        try {
            //The transporter is essentially the email that you are using to send
            //emails to your users. This is done using NodeMailers createTransport
            //method, passing it an object containing the information needed to 
            //sign into the email.
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });

            let info = await transporter.sendMail({
                from: `Aaron Zakimi <${EMAIL}>`,
                to: req.session.user.user_email,
                subject: 'Thanks for Registering!',
                text: 'This is a NodeMailer Test',
                html: 
                `<div>
                    <h1>WELCOME TO LYNNE AND LEE</h1>
                    <p>Hello ${req.session.user.username},</p>
                    <p>We are so happy you have registered with us,
                        please look for further emails for discounts and promotions only
                        available to subscribed members</p>
                </div>
                       <img src="cid:unique@nodemailer.com"/>`,
                attachments: [
                    {
                        filename: 'license.txt',
                        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                    },
                    {
                        cid: 'unique@nodemailer.com',
                        path: 'https://i.etsystatic.com/iusa/7c0909/61705609/iusa_400x400.61705609_qwwa.jpg?version=0'
                    }
                ]
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }
    } 
}

