import React, {useState} from 'react';
import {connect} from 'react-redux';
import {toggle, toggleAdmin} from '../../redux/userReducer';
// import {addToCart} from '../../redux/cartReducer';
import axios from 'axios';
import '../../App.scss'

function AddProduct(props){
    // let [product, setProduct] = useState([{}]);
    let [image1, setImage1] = useState();
    let [image2, setImage2] = useState();
    let [image3, setImage3] = useState();
    let [name, setName] = useState();
    let [price, setPrice] = useState();
    let [description, setDescription] = useState();
    // let [loggedIn, setLoggedIn] = useState();
    // let [isAdmin, setAdmin] = useState();

    // useEffect(() => {

    //     if(loggedIn === true && isAdmin === true){
    //         props.toggle(true)
    //         props.toggleAdmin(true)
    //     }
    // }, [])

    const handleAddProduct = () => {
        axios.post(`/api/addProduct`, {image1, image2, image3, name, price, description})
        .then(() => {
            alert('Product Added')
            setImage1('')
            setImage2('')
            setImage3('')
            setName('')
            setPrice(null)
            setDescription('')
            // window.location.reload(true) 
        })
        .catch(err => console.log(err))
    }

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
    console.log(props)
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
                                maxLength='425'
                                value={image2}
                                placeholder='Image 2'
                                onChange={(e) => handleImage2(e.target.value)}/>
                        </div>
                        <div className='edit-thumbnail-container'>
                            <img className='edit-image-container-pic'  src={image3} alt={name}/>
                            <textarea
                                className='edit-image'
                                value={image3}
                                placeholder='Image 3'
                                onChange={(e) => handleImage3(e.target.value)}/>
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
                        <button 
                            className='add-to-cart' 
                            onClick={handleAddProduct}>Add Product
                        </button>
                    </section>
                </main>
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {toggle, toggleAdmin})(AddProduct);