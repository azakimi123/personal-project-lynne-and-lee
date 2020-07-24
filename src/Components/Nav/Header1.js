import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../App.scss'

function Header1(props) {
    console.log(props)
    return (
        <div>
            <header>
                <section>
                    
                </section>
                <section className='nav-header'>
                    <ul>
                        <Link to='/'>
                            <li>HOME</li>
                        </Link>
                        <Link to='/shop'>
                            <li>SHOP</li>
                        </Link>
                        <Link to='/about'>
                            <li>ABOUT</li>
                        </Link>
                        <Link to='/contact'>
                            <li>CONTACT</li>
                        </Link>
                        <Link to='/signin'>
                            <li>SIGN IN</li>
                        </Link>
                        <Link to='/cart'>
                            <li>CART</li>
                        </Link>
                    </ul>
                </section>
            </header>
        </div>
    )
}

export default connect()(Header1);