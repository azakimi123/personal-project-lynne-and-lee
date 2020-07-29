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
                        <input placeholder='ENTER EMAIL'></input>
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
                    <p>LINKS</p>
                    <p>Return Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Employment</p>
                </section>
                <section className='footer-right'>
                    <section  className='social-media-icons'>
                        <img src='https://image.flaticon.com/icons/svg/1051/1051360.svg'  alt='facebook icon'/>
                        <img src='https://image.flaticon.com/icons/svg/49/49440.svg'  alt='pinterest icon'/>
                        <img src='https://image.flaticon.com/icons/svg/1384/1384031.svg'  alt='instagram'/>
                    </section>
                    <section>
                        <span>© 2020, Lynne & Lee</span><span>Powerd by </span>
                        <img className='footer-icon' src='https://image.flaticon.com/icons/svg/618/618731.svg' alt='flower heart'/>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Footer;

