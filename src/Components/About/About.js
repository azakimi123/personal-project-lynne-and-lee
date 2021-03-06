import React from 'react';
import family from '../../images/family.jpeg';
import '../../App.scss';

function About() {
    return (
        <div>
            <section className='about-container'>
                <p className='title'>ABOUT</p>
                <section className='about-pic-container'>
                    <img className='image' src={family} alt='shop owner'/>
                </section>
                <section className='text-container'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Hac habitasse platea dictumst quisque sagittis purus sit. Diam vel quam elementum pulvinar etiam non. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Volutpat commodo sed egestas egestas fringilla. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Sed faucibus turpis in eu mi bibendum neque egestas. Nunc vel risus commodo viverra maecenas accumsan lacus.</p>

                    <p>Id nibh tortor id aliquet lectus proin nibh. Ipsum suspendisse ultrices gravida dictum. Enim ut tellus elementum sagittis vitae et leo. Sed sed risus pretium quam vulputate dignissim. Sapien et ligula ullamcorper malesuada. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tristique nulla aliquet enim tortor at auctor urna. Eu facilisis sed odio morbi quis commodo odio aenean sed. Quis imperdiet massa tincidunt nunc. Ornare aenean euismod elementum nisi quis eleifend quam. Amet mattis vulputate enim nulla aliquet porttitor. Vel pharetra vel turpis nunc eget.</p>
                </section>
            </section>
        </div>
    )
}

export default About;