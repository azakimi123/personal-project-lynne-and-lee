import React, {useState, useEffect, useContext} from 'react';
import {connect} from 'react-redux';
import {toggle, getUser, clearUser, toggleAdmin} from '../../redux/userReducer';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header1 from './Header1';
import Header2 from './Header2';
import AdminHeader from './AdminHeader';
import '../../App.scss'
import TitleImage from '../../images/title.png';
import { AuthContext } from '../Auth/CreateContext';

function Nav(props) {
    // let [login, setLogin] = useState()
    const { adminFn, loginFn, loggedIn, isAdmin} = useContext(AuthContext)

    useEffect(() => {
        console.log(`nav.js mounted`)
        loginFn(localStorage.loggedIn)
    }, [localStorage.loggedIn])


// console.log(`local state: ${loggedIn}`)
// console.log(`redux state: ${props.userReducer.loggedIn}`)
console.log(localStorage.loggedIn)
// console.log(props)
    return (
        <div>
            <section className='nav-container'>
                <img className='title-image' src={TitleImage} alt='lynne and lee'/>
                { localStorage.loggedIn === true && isAdmin === true 
                ? <AdminHeader />
                : loggedIn === 'true' && isAdmin === false
                ? <Header2 />
                : <Header1 />
                }
            </section>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {toggle, getUser, clearUser, toggleAdmin})(Nav);

// { props.userReducer.loggedIn === true && props.userReducer.isAdmin === true 
//     ? <AdminHeader /> 
//     : props.userReducer.loggedIn === true && props.userReducer.isAdmin === false
//     ? <Header2 />
//     : <Header1 />
//     }



    // const handleLogOut = () => {
    //     axios.post('/auth/logout')
    //     .then(() => {
    //         props.toggle(false);
    //         props.toggleAdmin(false);
    //         props.isEditing(false);
    //         props.clearUser();
    //         props.history.push('/');
    //     })
    //     .catch(err => console.log(err))
    // }





    // let [username, setUsername] = useState('');
    // let [userEmail, setUserEmail] = useState('');
    // let [profilePic, setProfilePic] = useState('');

    // useEffect(() => {
    //     setLoggedIn(props.userReducer.loggedIn)
    //     setIsAdmin(props.userReducer.isAdmin)
    // }, [props])

    // useEffect(() => {
    //     axios.get('/auth/getUser')
    //     .then(res => {
    //         console.log(`user info`)
    //         setUsername(res.data[0].username)
    //         setUserEmail(res.data[0].user_email)
    //         setPassword(res.data[0].user_password)
    //         // handleRefresh()
    //     })
    //     .catch(err => console.log(err))
    // }, [props])

    // const handleRefresh = () => {
    //     axios.post('/auth/login', {userEmail, userPassword})
    //     .then(res => {
    //         // console.log(res.data)
    //         props.getUser(res.data);
    //         if(res.data.is_admin === true) {
    //             console.log('admin worked')
    //             props.toggleAdmin(true);
    //             props.toggle(true);
    //         } else {
    //             console.log('regular user')
    //             props.toggle(true);
    //         }        
    //     })
    //     .catch(err => alert(err.response.request.response))
    // }



    // const handleNavDisplay = () => {
//     if(props.userReducer.loggedIn === false) {
//         // console.log('first if')
//         return <Header1 />
//     } else if(props.userReducer.loggedIn === true && props.userReducer.isAdmin === true){
//         // console.log('second if')
//         return <AdminHeader />
//     } else if(props.userReducer.loggedIn === true && props.userReducer.isAdmin === false || loggedIn === true) {
//         // console.log('third if')
//         return <Header2 />
//     }
// }