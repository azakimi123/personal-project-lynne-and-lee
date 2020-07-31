import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CardPayment from './CardPayment';
import {addToCart, plusItem, minusItem, findTotal} from '../../redux/cartReducer';
import '../../App.scss';

function Checkout(props){
    let [userCart, setUserCart] = useState(props.cartReducer.cart);
    let [cartAmount, setCartAmount] = useState([{id:-1, cost:0}]);
    let [cartTotal, setCartTotal] = useState([0]);
    let [total, setTotal] = useState()
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


    const handleTotal = () => {
        let newArr = [0]
        const {amount, price} = props.cartReducer.cart;
        props.cartReducer.cart.map((product, index) => {
            newArr.push(product.amount * product.price)
        })
        cartTotal = newArr;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return newArr.reduce(reducer)  
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
        setTotal(0);
    }

    let totalCost = handleTotal();
    const productFinder2 = (id, price, amount) => {
        // console.log(price)
        for (let property in userCart) {
            let deduction = price * amount;
            console.log(deduction)
            if(userCart[property].id === id) {
                console.log('hello1')
                userCart.splice(property, 1)
                setTotal(totalCost -= deduction)
                totalCost -= deduction
                props.history.push('/cart')
                // console.log(totalCost)
                // let index = cartTotal.indexOf(price);
                // cartTotal.splice(index, 1);
            }
        }
    }


    
    console.log(totalCost)
    console.log(props.cartReducer)
        return (
            <div>
                <section className='checkout-container'>
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
                                    {/* <button onClick={ () => handleSubtract(product.id)}>-</button> */}
                                    <img onClick={ () => handleSubtract(product.id)} 
                                        src='https://image.flaticon.com/icons/svg/864/864373.svg' alt='minus button'/>
                                    <p>{product.amount}</p>
                                    {/* <button onClick={ () => handleAdd(product.id)}>+</button> */}
                                    <img onClick={ () => handleAdd(product.id)} 
                                        src='https://image.flaticon.com/icons/svg/864/864378.svg' alt='add button'/>
                                </section>
                                    <span>Item Amount: ${itemCost(product.amount, product.price, product.id)}</span>
                                    {/* <button className='remove-btn' onClick={ () => productFinder2(product.id, product.price, product.amount)}>REMOVE</button> */}
                                    <img className='remove-btn' 
                                        onClick={ () => productFinder2(product.id, product.price, product.amount)} 
                                        src='https://image.flaticon.com/icons/svg/1828/1828947.svg' alt='remove button'/>
                            </section>
                        </div>
                        ))}
                        <section className='checkout-bottom'>
                            <span className='total-amount'>Total: ${total ? total : totalCost}</span>
                            <CardPayment className='proceed-to-checkout' total={handleTotal(cartTotal)} clearCartFn={clearCart}/> 
                        </section>
                </section>
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {addToCart, plusItem, minusItem, findTotal})(Checkout);


// for (let i = 0; i < props.cartReducer.cart.length; i++) {
//     console.log(props.cartReducer.cart[i])
//     for (let property in props.cartReducer.cart[i]) {
//         if (property === "product_id") {
//             userCart.push(props.cartReducer.cart[i][property])
//         }
//     }
// }


// onChange={e => setAmount(e.target.value)}


