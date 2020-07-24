import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header1 from './Header1';
import Header2 from './Header2';
import AdminHeader from './AdminHeader';
import '../../App.scss'

function Nav(props) {
    // console.log(props)
const handleNavDisplay = () => {
    if(props.loggedIn === false) {
        // console.log('first if')
        return <Header1 />
    } else if(props.loggedIn === true && props.isAdmin === true){
        // console.log('second if')
        return <AdminHeader />
    } else if(props.loggedIn === true && props.isAdmin === false) {
        // console.log('third if')
        return <Header2 />
    }
}
console.log(props)
    return (
        <div>
            {handleNavDisplay()}
            {/* {props.loggedIn === false ?
            <Header1 /> :
            <Header2 />} */}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);