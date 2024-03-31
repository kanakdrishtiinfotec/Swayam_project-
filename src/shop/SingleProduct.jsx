import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation } from 'swiper/modules';
import ProductDisplay from './ProductDisplay';

const SingleProduct = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    }, [])

    const result = product.filter((p) => p.id === id);
    console.log(result)


    return (
        <div>
            <PageHeader title={"Our Product Page"} curPage={"Shop / Single product"} />

            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="justify-content-center">
                        <article>
                            <div className="product-details">
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-12" >
                                        <div className='product-thumb'>

                                            <div className="swiper-container pro-single-top">
                                                <Swiper
                                                   
                                                    slidesPerView={1}
                                                    loop={"true"}
                                                    navigation={true} modules={[Navigation]}
                                                    className="mySwiper">
                                                    {
                                                        result.map((item, i) => {
                                                            return <SwiperSlide key={i}>
                                                                <div className='single-thumb'>
                                                                    <img src={item.img} alt="" />
                                                                   

                                                                </div>

                                                            </SwiperSlide>
                                                        })
                                                    }
                                                </Swiper>
                                                {/* <div className="pro-single-pre">
                                                    <i className='icofont-rounded-left'></i>
                                                </div>
                                                <div className="pro-single-pre">
                                                    <i className='icofont-rounded-right'></i>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-12" >
                                        <div className="post-content">

                                            <div>{
                                                 result.map((item)=> <ProductDisplay key={item.id} item={item} />)
                                                }
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProduct
