import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header1 from './Header1';
import Header2 from './Header2';
import '../../App.scss'

function Nav(props) {
    // console.log(props)
    return (
        <div>
            {props.loggedIn === false ?
            <Header1 /> :
            <Header2 />}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);