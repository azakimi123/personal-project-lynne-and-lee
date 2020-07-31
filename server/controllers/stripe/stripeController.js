require('dotenv').config();
const {SECRET_KEY} = process.env;
const stripe = require('stripe')(SECRET_KEY);


module.exports = {
    payment: (req, res) => {
        const {token, amount} = req.body;
        console.log(token)

        const charge = stripe.charges.create({
            amount,
            currency: 'usd',
            source: token.id,
            receipt_email: token.email,
            description: 'Test Charge'
        }, function(err, charge) {
            if(err) {
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })
    }
}