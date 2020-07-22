import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Shop.css';

function Shop() {
    let [newProducts, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(res => setProducts(res.data))
    }, [])

    console.log(newProducts)
    return (
        <div className='shop-container'>
            <p>Shop</p>
            {newProducts.map((product, index) => (
                <div key={index}>
                    <section className='product-card'>
                        <p>{product.product_name}</p>
                        <img className='product-pic' src={product.product_image1} alt={product.product_name}/>
                        <p>{product.product_descripton}</p>
                        <p>${product.price}</p>
                    </section>
                </div>

            ))}
        </div>
    )
}

export default Shop;