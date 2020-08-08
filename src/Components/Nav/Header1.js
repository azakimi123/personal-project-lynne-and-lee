import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import DropdownMenu from '../Dropdown/DropdownMenu';
import TitleImage from '../../images/title.png';
import MobileHeader1 from './MobileHeader1';
import '../../App.scss'

function Header1(props) {
    // console.log(props)
    let [dropdownToggle, setDropdownToggle] = useState(false);


    const handleToggle = () => {
        setDropdownToggle(!dropdownToggle)
    }

    return (
        <div className='nav-main-container'>
            <section className='nav-top'>
                <section>
                    <img className='title-image-desk' src={TitleImage} alt='lynne and lee'/>
                </section>
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
            </section>
            <header>
            <section className='nav-top-mobile'>
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
            </header>
        </div>
    )
}

export default connect()(Header1);

 



{/* <header>
<section>
    
</section>
<menu className='nav-header'>
<img className='title-image-desk' src={TitleImage} alt='lynne and lee'/>
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
</menu>
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
</header> */}



{/* <section>
                    
</section>
<section className='nav-top'>
    <section>
        <img className='title-image-desk' src={TitleImage} alt='lynne and lee'/>
    </section>
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
</section> */}