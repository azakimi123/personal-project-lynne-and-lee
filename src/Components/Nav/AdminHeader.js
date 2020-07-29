import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearUser, toggle, toggleAdmin} from '../../redux/userReducer';
import {isEditing} from '../../redux/productReducer';
import axios from 'axios';
import '../../App.scss'

function AdminHeader(props) {

    const handleLogOut = () => {
        axios.post('/auth/logout')
        .then(() => {
            props.toggle(false);
            props.toggleAdmin(false);
            props.isEditing(false);
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
                    <img className='profile-pic' src='https://image.flaticon.com/icons/svg/848/848043.svg' alt='profile'/>
                    <p className='username' >{props.userReducer.user.username}</p>
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
                        <div className='dropdown'>
                            <li>SHOP MANAGER</li>
                            <div className='dropdown-content'>
                                <Link to='/edit'>EDIT PRODUCTS</Link>
                                <Link to='/stats'>SHOP STATS</Link>
                            </div>
                        </div>
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

export default connect(mapStateToProps, {toggle, clearUser, toggleAdmin, isEditing})(AdminHeader);