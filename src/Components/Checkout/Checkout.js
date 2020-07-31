import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CardPayment from './CardPayment';
import {addToCart, plusItem} from '../../redux/cartReducer';
import '../../App.scss';

function Checkout(props){
    let [userCart, setUserCart] = useState(props.cartReducer.cart);
    let [cartTotal, setCartTotal] = useState([0]);
    // let [amount, setAmount] = useState(1)
    useEffect(() => {
        setCartTotal(props.cartReducer.cartTotal)
    }, [])

    const handleAdd = (id) => {
        props.plusItem(id)
    }

    // const handleAdd = (id, amount, price) => {
    //     for (let property in userCart) {
    //         if(userCart[property].id === id) {
    //             // console.log(userCart[property])
    //             userCart[property].amount = userCart[property].amount + 1;
    //         }
    //     }
    // }

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
            // console.log(price)
            if(userCart[property].id === id) {
                userCart.splice(property, 1);
                let index = cartTotal.indexOf(price);
                cartTotal.splice(index, 1);
            }
        }
        props.history.push('/cart')
    }


    console.log(props)
        return (
            <div>
                <p>Checkout</p>
                    {userCart.map((product, index) => (
                    <div className='cart-card' key={index}>
                        <section>
                            <p>{product.name}</p>
                        </section>
                        <section className='second-cart-card'>
                            <div className='card-pic-container'>
                                <img className='card-product-pic' src={product.image} alt={product.product_name} />
                            </div>
                            <section className='card-buttons'>
                                <button onClick={ () => handleSubtract(product.amount, product.price)}>-</button>
                                <p>{product.amount}</p>
                                <button onClick={ () => handleAdd(product.id)}>+</button>
                            </section>
                                <button onClick={ () => productFinder2(product.id, product.price)}>REMOVE</button>
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

export default connect(mapStateToProps, {addToCart, plusItem})(Checkout);


// for (let i = 0; i < props.cartReducer.cart.length; i++) {
//     console.log(props.cartReducer.cart[i])
//     for (let property in props.cartReducer.cart[i]) {
//         if (property === "product_id") {
//             userCart.push(props.cartReducer.cart[i][property])
//         }
//     }
// }


// onChange={e => setAmount(e.target.value)}


