import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cartReducer';
import axios from 'axios';
import '../../App.scss'

function ProductEdit(props){
    let [product, setProduct] = useState([{}]);
    let [image1, setImage1] = useState([{}]);
    let [image2, setImage2] = useState([{}]);
    let [image3, setImage3] = useState([{}]);
    let [name, setName] = useState([{}]);
    let [price, setPrice] = useState([]);
    let [description, setDescription] = useState([]);
    useEffect(() => {
        axios.get(`/api/product/${props.id}`).then(res => (
            setProduct(res.data),
            setImage1(res.data[0].product_image1),
            setImage2(res.data[0].product_image2),
            setImage3(res.data[0].product_image3),
            setName(res.data[0].product_name),
            setPrice(res.data[0].price),
            setDescription(res.data[0].product_description)
            ))
    }, [])

    const handleImage1 = (input) => {
        setImage1(input);
    }
    const handleImage2 = (input) => {
        setImage2(input);
    }
    const handleImage3 = (input) => {
        setImage3(input);
    }
    const handleName = (input) => {
        setName(input);
    }
    const handlePrice = (input) => {
        setPrice(input);
    }
    const handleDescription = (input) => {
        setDescription(input);
    }
    // console.log(product[0])
    console.log(price)
        return (
            <div>
                <main>
                    <section>
                        <div className='edit-thumbnail-container'>
                            <img className='image-container-pic' src={image1} alt={name}/>
                        </div>
                        <div className='edit-thumbnail-container'>
                            <img className='edit-image-container-pic'  src={image2} alt={name}/>
                            <textarea
                                className='edit-image'
                                value={image2}
                                placeholder='Image 2'
                                onChange={(e) => handleImage2(e.target.value)}/>/>
                        </div>
                        <div className='edit-thumbnail-container'>
                            <img className='edit-image-container-pic'  src={image3} alt={name}/>
                            <textarea
                                className='edit-image'
                                value={image3}
                                placeholder='Image 3'
                                onChange={(e) => handleImage3(e.target.value)}/>/>
                        </div>
                    </section>
                    <section>
                        <div className='edit-main-pic-container'>
                            <img className='edit-main-image-container-pic'  src={image1} alt={name}/>
                            <textarea
                                className='edit-image1'
                                value={image1}
                                placeholder='Image 1'
                                onChange={(e) => handleImage1(e.target.value)}/>
                        </div>
                    </section>
                    <section className='product-info'>
                        <input className='edit-product-title'
                            value={name}
                            placeholder='Product Title'
                            onChange={(e) => handleName(e.target.value)}/>
                        <span>$</span><input className='edit-product-price'
                            value={price}
                            placeholder='Price'
                            onChange={(e) => handlePrice(e.target.value)}/>
                        <p></p>
                        <textarea className='edit-product-description'
                            value={description}
                            placeholder='Product Description'
                            onChange={(e) => handleDescription(e.target.value)}/>
                        <button className='add-to-cart' >Submit</button>
                    </section>
                </main>
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {addToCart})(ProductEdit);