import React from 'react';
import '../../App.scss';
// import {connect} from 'react-redux';


function PictureDisplay(props) {
    // console.log(props)
    return(
        <div>
            <section className='picture-display-cover-container'>
                <div className='picture-display-container'>
                    <img src='https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/70441452_537144950366977_1514068949292023808_o.jpg?_nc_cat=106&_nc_sid=9267fe&_nc_ohc=pyF2S_R172oAX_kJIb0&_nc_ht=scontent.faus1-1.fna&oh=7ae72aa73d5f5e8e5a6bc7edc5b83c92&oe=5F47D2C4' alt='flower garlands'/>
                </div>
                <div className='picture-display-container'>
                    <img src='https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/66617452_506573043424168_8581014481797120000_n.jpg?_nc_cat=107&_nc_sid=9267fe&_nc_ohc=WRTSrGBKoQAAX-yp-qV&_nc_ht=scontent.faus1-1.fna&oh=c81cbad9cf9f2fc19f030dc033eae040&oe=5F445E38' alt='flower garlands'/>
                </div>
                <div className='picture-display-container'>
                    <img src='https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/80820153_620764998671638_6750729145157681152_n.jpg?_nc_cat=111&_nc_sid=9267fe&_nc_ohc=w2Q34sqa4p8AX9FKghe&_nc_ht=scontent.faus1-1.fna&oh=e2faa9e44e5a5e7543527fc9cfbcba4e&oe=5F446FC4' alt='flower garlands'/>
                </div>
            </section>
        </div>
    )
}



export default PictureDisplay;