import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import axios from 'axios';
import '../../App.scss'

function Register(props) {
    let [email, setEmail] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleRegister = () => {
        if(email && username && password) {
            axios.post('/auth/register', {email, username, password})
            .then(res => {
                console.log(res.data)
                props.getUser(res.data);
                props.history.push('/');
            })
            .catch(err => alert('Sign in information not registered'))
        }
    }

    // console.log(props)
    return(
        <div>
            <h1>REGISTER PAGE</h1>
            <span>USERNAME</span><input
                value={username}
                onChange={ e => setUsername(e.target.value)}/>
            <span>EMAIL</span><input
                value={email}
                onChange={ e => setEmail(e.target.value)}/>
            <span>PASSWORD</span><input
                value={password}
                type='password'
                onChange={ e => setPassword(e.target.value)}/>
            <button onClick={handleRegister}>CREATE ACCOUNT</button>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Register);