// require('dotenv').config();
import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';


function CardPayment(props) {

    const onToken = async (token, addresses) => {
        token.card = void 0;
        // console.log(token)
        await axios.post('/api/payment', {token, amount: props.total * 100})
        .then((res) => {
            props.clearCartFn()
            alert('Payment Submitted')
            createOrder()
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    const createOrder = () => {
        axios.post('/api/createOrder', {id: props.userReducer.user.user_id})
        .then(() => {
            console.log(`order added to db`)
        })
        .catch(err => console.log(err))
    }

    console.log(props)
    return (
        <div>
            <StripeCheckout
                label='Proceed to Checkout'
                token={onToken}
                stripeKey= 'pk_test_51H8YbfBVcp0wBeLCclvga83tvGrso7r5NhtuGR7BLUUWL4C1DZadV3zsd3VX2q4khvcfOi69Zyphx5UFBzvZz0c800jLYcJLA8'
                amount={props.total * 100}
                shippingAddress={true}
                billingAddress={true}/>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;


export default connect(mapStateToProps)(CardPayment);

// 