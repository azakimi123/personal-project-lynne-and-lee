import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearUser, toggle} from '../../redux/userReducer';
import axios from 'axios';
import '../../App.scss'

function Header2(props) {

    const handleLogOut = () => {
        axios.post('/auth/logout')
        .then(() => {
            props.toggle(false);
            props.clearUser();
            props.history.push('/');
        })
        .catch(err => console.log(err))
    }

    console.log(props)
    return (
        <div>
            <header>
                <section>
                    <p>YOU ARE LOGGED IN!!!</p>
                    <p>{props.user.username}</p>
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
                        <Link to='/'>
                            <li onClick={handleLogOut}>LOG OUT</li>
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

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {toggle, clearUser})(Header2);