import React from 'react';
import '../../App.scss';
import Pic1 from '../../images/Pic1.jpeg';
import Pic2 from '../../images/Pic2.jpeg';
import Pic3 from '../../images/Pic3.jpeg';
// import {connect} from 'react-redux';


function PictureDisplay(props) {
    // console.log(props)
    return(
        <div>
            <section className='picture-display-cover-container'>
                <div className='picture-display-container'>
                    <img src={Pic1} alt='flower garlands'/>
                </div>
                <div className='picture-display-container'>
                    <img src={Pic2} alt='flower garlands'/>
                </div>
                <div className='picture-display-container'>
                    <img src={Pic3} alt='flower garlands'/>
                </div>
            </section>
        </div>
    )
}



export default PictureDisplay;