import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import '../../App.scss';

function Checkout(props){
    let [userCart, setUserCart] = useState([]);
    let [cartTotal, setCartTotal] = useState([0]);

    const handleTotal = (arr) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return arr.reduce(reducer);
    }

    useEffect(() => {
        setUserCart(props.cartReducer.cart)
        setCartTotal(props.cartReducer.cartTotal)
    }, [])
    console.log(cartTotal)
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
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Checkout);