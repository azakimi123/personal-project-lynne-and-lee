import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../App.scss';


function Reviews() {

    let [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        axios.get('/api/reviews').then(res => setReviewList(res.data))
    }, [])

    console.log(reviewList[0])
    return(
        <div>
            <h2 className='review-title'>REVIEWS</h2>
            {reviewList.map((review, index) => (
                <section className='reviews-main'>
                    <section className='reviews-cover-container' key={index}>
                        <div className='reviews-display-container'>
                            <p>
                                <img src='https://image.flaticon.com/icons/svg/39/39711.svg' alt='quote marks'/>
                                {review.comment} 
                                <img className='bottom-quotes'src='https://image.flaticon.com/icons/svg/39/39711.svg' alt='quote marks'/>
                            </p>
                            <p>-{review.username}</p>
                        </div>
                    </section>
                </section>
            ))
            }
        </div>
    )
}

export default Reviews;