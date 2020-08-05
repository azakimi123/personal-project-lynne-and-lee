import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearUser, getUser, toggle} from '../../redux/userReducer';
import axios from 'axios';
import '../../App.scss'

function Header2(props) {
    let [loggedIn, setLoggedIn] = useState(props.userReducer.loggedIn);
    let [isAdmin, setIsAdmin] = useState(props.userReducer.isAdmin);

    // useEffect(() => {
    //     setLoggedIn(props.userReducer.loggedIn)
    //     setIsAdmin(props.userReducer.isAdmin)
    // }, [])

    useEffect(() => {
        axios.get('/auth/getUser')
        .then(res => {
            console.log(`user info`)
            props.getUser(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    const handleLogOut = () => {
        axios.post('/auth/logout')
        .then(() => {
            props.toggle(false)
            props.clearUser()
            localStorage.setItem('loggedIn', 'false')
            // props.history.push('/')
            window.location.reload(false)
        })
        .catch(err => console.log(err))
    }

    // console.log(loggedIn)
    return (
        <div>
            <header>
                <section>
                    <img className='profile-pic' src={props.userReducer.user.user_profile_pic} alt='profile'/>
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

export default connect(mapStateToProps, {toggle, getUser, clearUser})(Header2);