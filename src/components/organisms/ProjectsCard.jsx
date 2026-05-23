"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

const ProjectsCard = ({
    link,
    images,
    title,
    tag,
    rating,
    location,
    reviews,
    description,
    pricing,
    isWishlistFill
}) => {

    return (

        <>
            <Link href={link} className="product-card" target='_blank'>
                <div className="hotel-card">
                    <figure>
                        <Swiper
                            spaceBetween={0}
                            speed={500}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <div className="banner">
                                        <Image
                                            src={img}
                                            width={400}
                                            height={250}
                                            alt={title}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <span className="tag">{tag}</span>
                        <button className={`wishlist-btn ${isWishlistFill ? "fill" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none" >
                                <path d="M21 6.862C21.0034 8.40075 20.4106 9.881 19.346 10.992C16.905 13.523 14.537 16.162 12.006 18.6C11.425 19.15 10.504 19.13 9.94899 18.555L2.65399 10.993C0.448994 8.707 0.448994 5.017 2.65399 2.732C3.17514 2.185 3.80193 1.74952 4.49638 1.45197C5.19084 1.15442 5.93848 1.001 6.69399 1.001C7.44951 1.001 8.19715 1.15442 8.8916 1.45197C9.58606 1.74952 10.2129 2.185 10.734 2.732L11 3.006L11.265 2.732C11.7868 2.18574 12.4137 1.7507 13.108 1.45304C13.8022 1.15539 14.5496 1.00128 15.305 1C16.825 1 18.278 1.624 19.345 2.732C20.41 3.84284 21.0032 5.32311 21 6.862Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
                            </svg>

                        </button>
                    </figure>

                    <figcaption className="card-content">
                        <div className="card-header">
                            <h3>{title}</h3>
                            <span className="rating">{rating}
                                <Image src="/assets/icon/star.svg" width={12} height={12} alt='star ico'></Image>
                            </span>
                        </div>
                        <p className="location">
                            <Image src="/assets/icon/primary-location.svg" width={20} height={20} alt='location ico'></Image>
                            {location}
                        </p>

                        <p className="reviews">
                            <span className="rating-deci">{reviews.score}</span> <span className='rating-detail'>{reviews.label}</span> {reviews.count} reviews
                        </p>
                        <p className="desc">
                            {description}
                        </p>
                        <div className="card-footer">
                            <span className="discount">{pricing.discount}</span>
                            <div className="price">
                                <div className="col">
                                    <p className="old">₹{pricing.oldPrice}</p>
                                    <p className="new">₹{pricing.newPrice}</p>
                                </div>
                                <p className="meta">{pricing.meta}</p>
                            </div>
                        </div>
                    </figcaption>
                </div>
            </Link>
        </>
    )
}

export default ProjectsCard