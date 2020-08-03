import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CardPayment from './CardPayment';
import {addToCart, plusItem, minusItem, findTotal} from '../../redux/cartReducer';
import '../../App.scss';

function Checkout(props){
    let [userCart, setUserCart] = useState(props.cartReducer.cart);
    let [cartAmount, setCartAmount] = useState([{id:-1, cost:0}]);
    let [cartTotal, setCartTotal] = useState([0]);
    let [total, setTotal] = useState(0);
    let [totalCost, setTotalCost] = useState();
    useEffect(() => {
        setTotalCost(handleTotal())
    }, [])

    const handleAdd = (id) => {
        props.plusItem(id)
        // setUserCart(props.cartReducer.cart)
        setTotalCost(handleTotal())
    }

    const handleSubtract = (id) => {
        props.minusItem(id)
        // setUserCart(props.cartReducer.cart)
        setTotalCost(handleTotal())
    }


    const handleTotal = () => {
        let newArr = [0]
        const {amount, price} = props.cartReducer.cart;
        props.cartReducer.cart.map((product, index) => {
            newArr.push(product.amount * product.price)
        })
        // totalCost = newArr;
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
        props.cartReducer.cart.splice(0)
        setTotalCost(0);
    }

    // let totalCost = handleTotal();
    const productFinder2 = (id, price, amount) => {
        // console.log(price)
        for (let property in props.cartReducer.cart) {
            let deduction = price * amount;
            console.log(deduction)
            if(props.cartReducer.cart[property].id === id) {
                console.log('hello1')
                props.cartReducer.cart.splice(property, 1)
                setTotalCost(totalCost -= deduction)
                totalCost -= deduction
                props.history.push('/cart')
                // console.log(totalCost)
                // let index = cartTotal.indexOf(price);
                // cartTotal.splice(index, 1);
            }
        }
    }


    
    console.log(`totalCost = ${totalCost}`)
    // console.log(`total = ${total}`)
    // console.log(props.cartReducer)
    console.log(userCart)
    console.log(props.cartReducer)
        return (
            <div>
                <section className='checkout-container'>
                    <p>Checkout</p>
                        {props.cartReducer.cart.map((product, index) => (
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
                            {/* <span className='total-amount'>Total: ${total ? total : totalCost}</span> */}
                            <span className='total-amount'>Total: ${totalCost}</span>
                            {/* <span className='total-amount'>Total: ${total}</span> */}
                            <CardPayment className='proceed-to-checkout' total={totalCost} clearCartFn={clearCart}/> 
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


// total={handleTotal(cartTotal)}

// onChange={e => setAmount(e.target.value)}


