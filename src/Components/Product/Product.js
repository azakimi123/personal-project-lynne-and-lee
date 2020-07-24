import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../../App.scss'

function Product(props){
    let [product, setProduct] = useState([{}]);
    let [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(`/api/product/${props.match.params.productId}`).then(res => (
            setProduct(res.data),
            console.log(res.data),
            setImages([res.data[0].product_image1, res.data[0].product_image2, res.data[0].product_image3])
            ))
    }, [])
    console.log(product)
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
                    <setion>
                        <div className='main-pic-container'>
                            <img className='main-image-container-pic'  src={product[0].product_image1} alt={product[0].product_name}/>
                        </div>
                    </setion>
                    <section className='product-info'>
                        <p className='product-title'>{product[0].product_name}</p>
                        <p className='product-price'>${product[0].price}</p>
                        <p className='product-description'>{product[0].product_description}</p>
                        <button className='add-to-cart'>ADD TO CART</button>
                    </section>
                </main>
            </div>
        )
    }

export default connect()(Product);