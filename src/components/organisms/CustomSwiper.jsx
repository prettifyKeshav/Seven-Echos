"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import VillasCard from "./VillasCard";

const CustomSwiper = ({
    data = [],
    spaceBetween,
    speed,
    slidesPerView,
    swiperSlideCard,

}) => {

    return (
        <>
            <div className="swiper-group">
                <Swiper
                    spaceBetween={spaceBetween}
                    speed={speed}
                    slidesPerView={slidesPerView}

                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    {
                                        swiperSlideCard === "VillasCard" ? (<VillasCard {...item} />) :
                                            <Link href={item.SwiperHref} >
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
            </div>
        </>
    )
}

export default CustomSwiper