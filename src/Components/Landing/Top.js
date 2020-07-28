import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss';


function Top() {
    return(
        <div>
            <section className='banner-cover-container'>
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