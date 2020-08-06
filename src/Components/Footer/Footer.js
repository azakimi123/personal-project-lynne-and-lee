import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss';


function Footer() {
    return(
        <div>
            <section className='footer-cover-bar'>
                <section className='footer-email'>
                    <section className='footer-bar-left'>
                        <p>JOIN OUR MAILING LIST</p>
                    </section>
                    <section className='footer-bar-left'>
                        {/* <input className='email-input' placeholder='ENTER EMAIL'></input> */}
                        <img className='arrow'src='https://image.flaticon.com/icons/svg/709/709586.svg' alt='arrow'/>
                    </section>
                </section>
            </section>
            <section className='footer-cover-container'>
                <section className='footer-left'>
                    <p>CONTACT</p>
                    <p>Lynne.Lee@gmail.com</p>
                    <p>1456 Briar Lane</p>
                    <p>Lehi UT, 85204</p>
                </section>
                <section className='footer-middle'>
                    <span>LINKS</span>
                    <section className='footer-links'>
                        <Link to='/returnPolicy' className='bottom-link'>
                            <p>Return Policy</p>
                        </Link>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Employment</p>
                    </section>
                </section>
                <section className='footer-right'>
                    <section  className='social-media-icons'>
                        <a href='https://www.facebook.com/lynne.and.lee' target='_blank'>
                            <img src='https://image.flaticon.com/icons/svg/1051/1051360.svg'  alt='facebook icon'/>
                        </a>
                        <a href='https://www.pinterest.com/lynneandlee/' target='_blank'>
                            <img src='https://image.flaticon.com/icons/svg/49/49440.svg'  alt='pinterest icon'/>
                        </a>
                        <a href='https://www.instagram.com/lynne.and.lee/?hl=en' target='_blank'>
                            <img src='https://image.flaticon.com/icons/svg/1384/1384031.svg'  alt='instagram'/>
                        </a>
                    </section>
                    <section>
                        <span>© 2020, Lynne & Lee,</span><span> Powerd by </span>
                        <img className='footer-icon' src='https://image.flaticon.com/icons/svg/618/618731.svg' alt='flower heart'/>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Footer;

