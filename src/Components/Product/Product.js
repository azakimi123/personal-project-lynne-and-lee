import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cartReducer';
import axios from 'axios';
import Product2 from './Product2';
import ProductEdit from '../ProductEdit/ProductEdit';
import '../../App.scss'

function Product(props){

const handleProductToggle = () => {
    if (props.productReducer.edit === false) {
        return <Product2 id={props.match.params.productId}/>;
        } else {
            return <ProductEdit id={props.match.params.productId} backFn={props.history.goBack} />
        }
 }
  
    console.log(props)
        return (
            <div>
                {handleProductToggle()}
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {addToCart})(Product);