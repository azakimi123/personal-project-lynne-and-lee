import React, {useState, useContext} from 'react';
import {connect} from 'react-redux';
import {getUser, toggle, toggleAdmin} from '../../redux/userReducer';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../App.scss'
import { AuthContext } from './CreateContext';

function Auth(props) {
    const { adminFn, loginFn, loggedIn, isAdmin} = useContext(AuthContext)

    let [email, setEmail] = useState('');
    // let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('/auth/login', {email, password})
        .then(res => {
            // console.log(res.data)
            props.getUser(res.data);
            if(res.data.is_admin === true) {
                console.log('admin worked')
                adminFn(true);
                loginFn(true);
                localStorage.setItem('loggedIn','true')
                localStorage.setItem('isAdmin','true')
                props.history.push('/');
                window.location.reload(false)
            } else {
                console.log('regular user')
                loginFn(true);
                // localStorage.setItem('user', JSON.stringify(res.data))
                localStorage.setItem('loggedIn','true')
                // console.log(res.data)
                props.history.push('/');
                window.location.reload(false)
            }        
        })
        .catch(err => alert(err.response.request.response))
    }
    // console.log(useContext(AuthContext))
    // console.log(adminFn)
    // console.log(loginFn)
    console.log(localStorage.loggedIn)
    return(
        <div className='auth-background'>
            <section className='auth-cover-container'>
                <section className='auth-container'>
                    <h2 className='auth-title'>LOGIN</h2>
                    <section className='auth-container-upper'>
                        <span>EMAIL</span><input
                            value={email}
                            onChange={ e => setEmail(e.target.value)}/>
                        <span>PASSWORD</span><input
                            value={password}
                            type='password'
                            onChange={ e => setPassword(e.target.value)}/>
                    </section>
                    <button className='signin-button' onClick={handleLogin}>SIGN IN</button>
                    <Link className='register-button' to='/register'>
                        <p>CREATE ACCOUNT</p>
                    </Link>
                </section>
            </section>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, toggle, toggleAdmin})(Auth);






// props.getUser(res.data);
// props.toggle(true);
// props.history.push('/');