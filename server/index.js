require('dotenv').config();
const express = require('express'),
      app = express(),
      session = require('express-session'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      massive = require('massive'),
      authCTRL = require('./controllers/authController'),
      productCTRL = require('./controllers/productController'),
      mailCTRL = require('../server/nodemailer/mailController'),
      stripeCTRL = require('../server/controllers/stripe/stripeController'),
      orderCTRL = require('./controllers/orderController'),
      reviewCTRL = require('./controllers/reviewController');


app.use(express.json());


//session set up
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}));




//massive set up
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})


//auth controllers
app.post('/auth/register', authCTRL.register);
app.post('/auth/login', authCTRL.login);
app.post('/auth/logout', authCTRL.logout);

//mail controllers
app.post('/api/mail', mailCTRL.email);

//payment controllers
app.post('/api/payment', stripeCTRL.payment);

//product controllers
app.get('/api/products', productCTRL.allProducts);
app.get('/api/product/:id', productCTRL.getOneProduct);
app.post('/api/addItem/:id', productCTRL.addItem);
app.put('/api/edit/:id', productCTRL.editProduct);
app.post('/api/addProduct', productCTRL.addNewProduct);
app.delete('/api/deleteProduct/:id', productCTRL.deleteProduct);

//order controllers


//review controllers
app.get('/api/reviews', reviewCTRL.getReviews);

app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))
