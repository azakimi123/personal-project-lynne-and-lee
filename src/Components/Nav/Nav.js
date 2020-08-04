import React from 'react';
import {connect} from 'react-redux';
import Header1 from './Header1';
import Header2 from './Header2';
import AdminHeader from './AdminHeader';
import '../../App.scss'
import TitleImage from '../../images/title.png';

function Nav(props) {
    // console.log(props)
const handleNavDisplay = () => {
    if(props.userReducer.loggedIn === false) {
        // console.log('first if')
        return <Header1 />
    } else if(props.userReducer.loggedIn === true && props.userReducer.isAdmin === true){
        // console.log('second if')
        return <AdminHeader />
    } else if(props.userReducer.loggedIn === true && props.userReducer.isAdmin === false) {
        // console.log('third if')
        return <Header2 />
    }
}
console.log(props)
    return (
        <div>
            <section className='nav-container'>
                <img className='title-image' src={TitleImage} alt='lynne and lee'/>
                {handleNavDisplay()}
                {/* {props.loggedIn === false ?
                <Header1 /> :
                <Header2 />} */}
            </section>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);