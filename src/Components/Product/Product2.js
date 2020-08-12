import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cartReducer';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import axios from 'axios';
import '../../App.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Product2(props){
    let [product, setProduct] = useState([{}]);
    let [images, setImages] = useState([]);
    let [index, setIndex] = useState(0);
    // let [slide1, setSlide1] useState()
    useEffect(() => {
        axios.get(`/api/product/${props.id}`).then(res => (
            setProduct(res.data),
            // console.log(res.data)
            setImages([res.data[0].product_image1, res.data[0].product_image2, res.data[0].product_image3])
            ))
    }, [])

    const handleCart = () => {
        props.cartReducer.cart.push({
            id: product[0].product_id,
            name: product[0].product_name,
            price: product[0].price,
            image: product[0].product_image1,
            amount: 1
        })
        // props.cartReducer.cartTotal.push(product[0].price)
        props.cartReducer.productAmount.push({
            id: product[0].product_id,
            amount: 1
        })
        alert(`item ${product[0].product_name} added to cart`)
    }

    const handleNext = () => {
        if(index >= 2) {
            setIndex(0)
        } else {
            setIndex(index += 1)
        }
    }

    const handleBack = () => {
        if(index <= 0) {
            setIndex(2)
        } else {
            setIndex(index -= 1)
        }
    }

    // const insertItem = (array) => {
    //     let newArr = array.push(product[0]);
    //     return newArr;
    //   }

    // console.log(product[0])
    // console.log(props)
    // console.log(images[0])
    const slide1 = <img src={images[0]} alt={product[0].product_name}/>;
    const slide2 = <img src={images[1]} alt={product[0].product_name}/>;
    const slide3 = <img src={images[2]} alt={product[0].product_name}/>;
    console.log(Pagination)
        return (
            <div>
                <main>
                    <section className='desktop-thumbnail'>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic' src={product[0].product_image1} alt={product[0].product_name}/>
                        </div>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic'  src={product[0].product_image2} alt={product[0].product_name}/>
                        </div>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic'  src={product[0].product_image3} alt={product[0].product_name}/>
                        </div>
                    </section>
                    <section className='desktop-main-pic'>
                        <div className='main-pic-container'>
                            <img className='main-image-container-pic'  src={images[index]} alt={product[0].product_name}/>
                            {/* <button className='back-btn' onClick={handleBack}>back</button> */}
                            {/* <button className='next-btn' onClick={handleNext}>next</button> */}
                            <img className='back-btn' onClick={handleBack} src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='back arrow'/>
                            <img className='next-btn' onClick={handleNext} src='https://image.flaticon.com/icons/svg/860/860828.svg' alt='next arrow'/>
                        </div>
                    </section>
                    <section className='mobile-main-pic'>
                        <div className='mobile-main-pic-container'>
                                <Swiper
                                    spaceBetween={100}
                                    slidesPerView={1}
                                    navigation
                                    pagination
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>{slide1}</SwiperSlide>
                                    <SwiperSlide>{slide2}</SwiperSlide>
                                    <SwiperSlide>{slide3}</SwiperSlide>
                                    {/* <div className="swiper-pagination"></div> */}
                                </Swiper>
                            {/* <button className='back-btn' onClick={handleBack}>back</button> */}
                            {/* <button className='next-btn' onClick={handleNext}>next</button> */}
                            {/* <img className='back-btn' onClick={handleBack} src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='back arrow'/>
                            <img className='next-btn' onClick={handleNext} src='https://image.flaticon.com/icons/svg/860/860828.svg' alt='next arrow'/> */}
                        </div>
                    </section>
                    {/* <section className='mobile-thumbnail'>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic' src={product[0].product_image1} alt={product[0].product_name}/>
                        </div>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic'  src={product[0].product_image2} alt={product[0].product_name}/>
                        </div>
                        <div className='thumbnail-container'>
                            <img className='image-container-pic'  src={product[0].product_image3} alt={product[0].product_name}/>
                        </div>
                    </section> */}
                    <section className='product-info'>
                        <p className='product-title'>{product[0].product_name}</p>
                        <p className='product-price'>${product[0].price}</p>
                        <p className='product-description'>{product[0].product_description}</p>
                        <button className='add-to-cart' onClick={handleCart}>ADD TO CART</button>
                    </section>
                </main>
            </div>
        )
    }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {addToCart})(Product2);