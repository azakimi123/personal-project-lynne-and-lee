import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CardPayment from './CardPayment';
import {addToCart, plusItem, minusItem} from '../../redux/cartReducer';
import '../../App.scss';

function Checkout(props){
    let [userCart, setUserCart] = useState(props.cartReducer.cart);
    let [cartAmount, setCartAmount] = useState([{id:-1, cost:0}]);
    let [cartTotal, setCartTotal] = useState([0]);
    // useEffect(() => {
    //     setCartTotal(props.cartReducer.cartTotal)
    // }, [])

    const handleAdd = (id) => {
        props.plusItem(id)
        setUserCart(props.cartReducer.cart)
    }

    const handleSubtract = (id) => {
        props.minusItem(id)
        setUserCart(props.cartReducer.cart)
    }


    const handleTotal = (arr) => {
        let newArr = [0];
        const {amount, price} = props.cartReducer.cart;
        props.cartReducer.cart.map((product, index) => {
            newArr.push(product.amount * product.price)
            console.log(newArr)
        })
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return newArr.reduce(reducer);
    }

    // const handleTotal = () => {
    //     let newArr = [];
    //     newArr.push(itemCost());
    //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //     return newArr.reduce(reducer);
    // }

    const itemCost = (amount, price, id) => {
        // console.log(id)
        let total = amount * price;
        cartAmount.push({
            id,
            cost: total
        })
        return total;
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


    console.log(cartTotal)
    console.log(props.cartReducer)
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
                                <button onClick={ () => handleSubtract(product.id)}>-</button>
                                <p>{product.amount}</p>
                                <button onClick={ () => handleAdd(product.id)}>+</button>
                            </section>
                                <button onClick={ () => productFinder2(product.id, product.price)}>REMOVE</button>
                                <span>Item Amount: ${itemCost(product.amount, product.price, product.id)}</span>
                        </section>
                    </div>
                    ))}
                    <span>Total: ${handleTotal(cartTotal)}</span>
                    <CardPayment total={handleTotal(cartTotal)} clearCartFn={clearCart}/> 
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {addToCart, plusItem, minusItem})(Checkout);


// for (let i = 0; i < props.cartReducer.cart.length; i++) {
//     console.log(props.cartReducer.cart[i])
//     for (let property in props.cartReducer.cart[i]) {
//         if (property === "product_id") {
//             userCart.push(props.cartReducer.cart[i][property])
//         }
//     }
// }


// onChange={e => setAmount(e.target.value)}


