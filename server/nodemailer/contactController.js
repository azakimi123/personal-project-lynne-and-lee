const nodemailer = require('nodemailer');
const { $CombinedState } = require('redux');
const {EMAIL, PASSWORD} = process.env;


module.exports = {
    contactForm: async(req, res) => {
        console.log(`contact handler hit`)
        let {name, email, message} = req.body;
        let content = `name: ${name} \n email: ${email} \n message: ${message} `;
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
                from: name,
                to: EMAIL,
                subject: 'New Message From Contact Form',
                text: content

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

