import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cartReducer';
import axios from 'axios';
import '../../App.scss'

function Product2(props){
    let [product, setProduct] = useState([{}]);
    // let [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(`/api/product/${props.id}`).then(res => (
            setProduct(res.data)
            // console.log(res.data)
            // setImages([res.data[0].product_image1, res.data[0].product_image2, res.data[0].product_image3])
            ))
    }, [])

    const handleCart = () => {
        props.cartReducer.cart.push({
            id: product[0].product_id,
            name: product[0].product_name,
            price: product[0].price,
            image: product[0].product_image1,
            amount: 1
        })
        props.cartReducer.cartTotal.push(product[0].price)
        props.cartReducer.productAmount.push({
            id: product[0].product_id,
            amount: 1
        })
        alert(`item ${product[0].product_name} added to cart`)
    }

    // const insertItem = (array) => {
    //     let newArr = array.push(product[0]);
    //     return newArr;
    //   }

    // console.log(product[0])
    // console.log(props)
        return (
            <div>
                <main>
                    <section>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic' src={product[0].product_image1} alt={product[0].product_name}/>
                        </div>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic'  src={product[0].product_image2} alt={product[0].product_name}/>
                        </div>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic'  src={product[0].product_image3} alt={product[0].product_name}/>
                        </div>
                    </section>
                    <section>
                        <div className='main-pic-container'>
                            <img className='main-image-container-pic'  src={product[0].product_image1} alt={product[0].product_name}/>
                        </div>
                    </section>
                    <section className='product-info'>
                        <p className='product-title'>{product[0].product_name}</p>
                        <p className='product-price'>${product[0].price}</p>
                        <p className='product-description'>{product[0].product_description}</p>
                        <button className='add-to-cart' onClick={handleCart}>ADD TO CART</button>
                    </section>
                </main>
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {addToCart})(Product2);