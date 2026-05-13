"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import ProjectsCard from "./ProjectsCard";
import { useState } from "react";
import CoastalLivingCard from "./CoastalLivingCard";
import TestimonialsCard from "./TestimonialsCard";
import WhatForYouCard from "./WhatForYouCard";
import PopularThingsCard from "../pages/ProjectListing/ProductDetail/PopularThingsCard";

const CustomSwiper = ({
    data = [],
    spaceBetween,
    speed,
    slidesPerView,
    swiperSlideCard,
    showPagination = false,
    navigation = false,
    swiperNavBtn,
    swiperNavClass
}) => {

    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <>
            <div className="swiper-group">
                <Swiper
                    spaceBetween={spaceBetween}
                    speed={speed}
                    slidesPerView={slidesPerView}
                    navigation={false}

                    modules={[Pagination]}
                    onSwiper={setSwiperInstance}
                    pagination={
                        showPagination
                            ? { clickable: true }
                            : false
                    }
                >
                    {
                        data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    {
                                        swiperSlideCard === "ProjectsCard" ? (<ProjectsCard {...item} />) :
                                            swiperSlideCard === "CoastalLivingCard" ? (<CoastalLivingCard {...item} />) :
                                                swiperSlideCard === "TestimonialsCard" ? (<TestimonialsCard {...item} />) :
                                                    swiperSlideCard === "WhatForYouCard" ? <WhatForYouCard {...item} /> :
                                                        swiperSlideCard === "PopularThingsCard" ? <PopularThingsCard {...item} /> :
                                                            < Link href={item.SwiperHref} >
                                                                <div className="banner">
                                                                    <Image src={item.SwiperImage} width={item.ImageWidth} height={item.ImageHeight} alt="img"></Image>

                                                                    <div className="container">
                                                                        <div className="banner-wrapper">
                                                                            <h3>{item.SwiperHeading}</h3>
                                                                            <p>{item.SwiperDescription}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                    }
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

                {(navigation) && (
                    <>
                        {navigation && data.length > slidesPerView && (
                            <div className={`swiper-nav ${swiperNavClass}`}>
                                <button className={`swiper-nav-prev ${swiperNavBtn}`} onClick={() => swiperInstance?.slidePrev()} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                        <path fill="#173254" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
                                    </svg>
                                </button>
                                <button className={`swiper-nav-next ${swiperNavBtn}`} onClick={() => swiperInstance?.slideNext()} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                        <path fill="#173254" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div >
        </>
    )
}

export default CustomSwiper