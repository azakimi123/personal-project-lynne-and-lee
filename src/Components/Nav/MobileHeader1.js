import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TitleImage from '../../images/title.png';
import '../../App.scss';


function MobileHeader1(props) {

        // console.log(props)
        let [dropdownToggle, setDropdownToggle] = useState(false);


        const handleToggle = () => {
            setDropdownToggle(!dropdownToggle)
        }

    console.log(`I'm from mobile header`)
    return(
        <div>
            <section className='nav-header-mobile'>
                <img className='title-image' src={TitleImage} alt='lynne and lee'/>
                <img className='nav-menu-icon' src='https://image.flaticon.com/icons/svg/545/545705.svg' alt='menu-icon' 
                onClick={handleToggle}/>
                {dropdownToggle
                ? (
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
                            <Link to='/signin'>
                                <li>SIGN IN</li>
                            </Link>
                             <Link to='/cart'>
                                <li>CART</li>
                            </Link>
                        </ul>
                )     
                : null
                }
            </section>
        </div>
    )
}

export default MobileHeader1;