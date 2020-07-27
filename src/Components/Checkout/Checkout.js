import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CardPayment from './CardPayment';
import '../../App.scss';

function Checkout(props){
    let [userCart, setUserCart] = useState([]);
    let [cartTotal, setCartTotal] = useState([0]);

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

    // const handleRemove = (val) => {
    //     props.cartReducer.cart.splice(val);
    // }   

    useEffect(() => {
        setUserCart(props.cartReducer.cart)
        setCartTotal(props.cartReducer.cartTotal)
    }, [])
    console.log(props.cartReducer.cart)
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
                                <button>-</button>
                                <p>{product.price}</p>
                                <button>+</button>
                            </section>
                                <button>REMOVE</button>
                        </section>
                    </div>
                    ))}
                    <span>Total: ${handleTotal(cartTotal)}</span>
                    <CardPayment total={handleTotal(cartTotal)} clearCartFn={clearCart}/>
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Checkout);