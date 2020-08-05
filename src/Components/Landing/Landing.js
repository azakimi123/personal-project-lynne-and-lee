import React from 'react';
import Top from './Top';
import OurStory from './OurStory';
import PictureDisplay from './PictureDisplay';
import Reviews from './Reviews';
import '../../App.scss';
import { connect } from 'react-redux';
// import routes from '../../routes';

function Landing(props) {
    // console.log(props)
    return (
        <div>
            <Top />
            <OurStory />
            <PictureDisplay />
            <Reviews />
        </div>
    )
}

export default connect()(Landing);