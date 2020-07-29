import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss';


function Top() {
    return(
        <div>
            <section className='banner-cover-container'>
                {/* <img className='banner-img' src='https://image.freepik.com/free-vector/powder-pastel-with-hand-drawn-elements-background_52683-40301.jpg'  alt=''/> */}
                    <Link  className='landing-shop-btn' to='/shop'>
                        <div className='button-container'>
                            <h2 className='btn-text'>SHOP NOW</h2>
                        </div>
                    </Link>
            </section>
        </div>
    )
}

export default Top;

