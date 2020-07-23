import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../App.scss'

function Shop() {
    let [newProducts, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(res => setProducts(res.data))
    }, [])

    console.log(newProducts)
    return (
        <div>
            <div className='shop-container'>
                {newProducts.map((product, index) => (
                    <div key={index}>
                        <section className='product-card'>
                            <div className='image-container'>
                                <img className='product-pic' src={product.product_image1} alt={product.product_name}/>
                            </div>
                            <div className='product-card-bottom'>
                                <p>{product.product_name}</p>
                                <p className='product-price'>${product.price.toFixed(2)}</p>
                            </div>
                        </section>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Shop;