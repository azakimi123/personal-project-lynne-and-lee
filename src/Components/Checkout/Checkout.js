import React, {useState, useEffect, isValidElement} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import CardPayment from './CardPayment';
import {addToCart} from '../../redux/cartReducer';
import '../../App.scss';

function Checkout(props){
    let [userCart, setUserCart] = useState([]);
    let [cartTotal, setCartTotal] = useState([0]);


    const handleAdd = (id, amount, price) => {
        axios.post(`/api/addItem/${id}`, {amount : amount++})
        .then((res) => {
            console.log(res.config.data.amount) 
        })
    }

    const handleSubtract = (amount, price) => {
        amount -= 1
        cartTotal.push(-price)
    }


    const handleTotal = (arr) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return arr.reduce(reducer);
    }

    const clearCart = () => {
        props.cartReducer.cart.splice(0);
        props.cartReducer.cartTotal = [0];
        setUserCart([]);
        setCartTotal([0]);
    }

    const productFinder2 = (id, price) => {
        for (let property in userCart) {
            console.log(price)
            if(userCart[property].product_id === id) {
                userCart.splice(property, 1);
                let index = cartTotal.indexOf(price);
                cartTotal.splice(index, 1);
            }
        }
        props.history.push('/cart')
    }

    useEffect(() => {
        setUserCart(props.cartReducer.cart)
        setCartTotal(props.cartReducer.cartTotal)
    }, [])

    useEffect(() => {
        setUserCart(props.cartReducer.cart)
        setCartTotal(props.cartReducer.cartTotal)
    }, [])

    console.log(props)
        return (
            <div>
                <p>Checkout</p>
                    {userCart.map((product, index) => (
                    <div className='cart-card' key={index}>
                        <section>
                            <p>{product.product_name}</p>
                        </section>
                        <section className='second-cart-card'>
                            <div className='card-pic-container'>
                                <img className='card-product-pic' src={product.product_image1} alt={product.product_name} />
                            </div>
                            <section className='card-buttons'>
                                <button onClick={ () => handleSubtract(product.product_amount, product.price)}>-</button>
                                <p>{product.product_amount}</p>
                                <button onClick={() => handleAdd(product.product_id, product.product_amount, product.price)}>+</button>
                            </section>
                                <button onClick={() => productFinder2(product.product_id, product.price)}>REMOVE</button>
                                {/* {console.log(userCart.findIndex(productIdFinder))} */}
                        </section>
                    </div>
                    ))}
                    <span>Total: ${handleTotal(cartTotal)}</span>
                    <CardPayment total={handleTotal(cartTotal)} clearCartFn={clearCart}/>
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {addToCart})(Checkout);


// for (let i = 0; i < props.cartReducer.cart.length; i++) {
//     console.log(props.cartReducer.cart[i])
//     for (let property in props.cartReducer.cart[i]) {
//         if (property === "product_id") {
//             userCart.push(props.cartReducer.cart[i][property])
//         }
//     }
// }


