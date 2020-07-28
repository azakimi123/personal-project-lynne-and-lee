import React from 'react';
import Top from './Top';
import OurStory from './OurStory';
import PictureDisplay from './PictureDisplay';
import Reviews from './Reviews';
import '../../App.scss';
// import routes from '../../routes';

function Landing() {
    return (
        <div>
            <Top />
            <OurStory />
            <PictureDisplay />
            <Reviews />
        </div>
    )
}

export default Landing;