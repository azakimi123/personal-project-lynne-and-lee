import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getUser, toggle} from '../../redux/userReducer';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../App.scss'

function Auth(props) {
    let [email, setEmail] = useState('');
    // let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('/auth/login', {email, password})
        .then(res => {
            console.log(res)
            props.getUser(res.data);
            props.toggle(true);
            props.history.push('/');
        })
        .catch(err => alert(err.response.request.response))
    }
    console.log(props)
    return(
        <div>
            <span>EMAIL</span><input
                value={email}
                onChange={ e => setEmail(e.target.value)}/>
            <span>PASSWORD</span><input
                value={password}
                type='password'
                onChange={ e => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>SIGN IN</button>
            <Link to='/register'>
                <p>CREATE ACCOUNT</p>
            </Link>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, toggle})(Auth);