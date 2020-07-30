import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {isEditing} from '../../redux/productReducer';
import {Link} from 'react-router-dom';
import '../../App.scss';

function Edit(props){
    let [newProducts, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(res => setProducts(res.data))
    }, [])

    const getProducts = () => {
        axios.get('/api/products').then(res => setProducts(res.data))
    }

    const handleEditBtn = () => {
        props.isEditing(true)
    }

    const handleDeleteBtn = (id) => {
        axios.delete(`/api/deleteProduct/${id}`)
        .then( () => {
            alert(`Product has been deleted`)
            getProducts()
        })
        .catch(err => console.log(err))
    }
    console.log(props)
    return (
        <div>
            <div className='edit-shop-container'>
                {newProducts.map((product, index) => (
                    <div key={index}>
                        <section className='edit-product-card'>
                            <div className='edit-image-container'>
                                <img className='edit-product-pic' src={product.product_image1} alt={product.product_name}/>  
                                <img 
                                    onClick={() => handleDeleteBtn(product.product_id)} 
                                    className='edit-delete-btn' src='https://image.flaticon.com/icons/svg/1828/1828947.svg' alt='red x'/>
                            </div>
                            <div className='edit-product-card-bottom'>
                                <p>{product.product_name}</p>
                                <p className='edit-price'>${product.price.toFixed(2)}</p>
                                <Link to={`/product/${product.product_id}`}>
                                    <button className='edit-button' onClick={handleEditBtn}>EDIT</button>
                                </Link>
                            </div>
                        </section>
                    </div>

                ))}
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {isEditing})(Edit);