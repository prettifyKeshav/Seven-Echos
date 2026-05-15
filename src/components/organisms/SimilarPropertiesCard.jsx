"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SimilarPropertiesCard = ({ ...item }) => {
    return (
        <>
            <div className="similar-properties-card">

                <div className="image-slider">
                    <Swiper
                        spaceBetween={0}
                        speed={900}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {item.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={img}
                                    width={475}
                                    height={296}
                                    alt="property-image"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="card-content">
                    <div className='top-flex'>
                        <h5 className="villa-name">{item.title}</h5>

                        <div className="rating-badge">
                            <div className='col'>
                                <span className="rating-label">
                                    {item.rating.label}
                                </span>

                                <span className='rating-reviews'>
                                    {item.rating.reviews}
                                </span>
                            </div>

                            <div className="rating-score">
                                {item.rating.score}
                            </div>
                        </div>
                    </div>

                    <div className="villa-meta">

                        {item.doubleBeds && (
                            <div className="meta-item">
                                <span className="meta-icon">
                                    {Array.from({ length: item.doubleBeds }).map((_, index) => (
                                        <Image
                                            key={index}
                                            src="/assets/icon/Duble-bed.svg"
                                            width={20}
                                            height={20}
                                            alt='double-bed-icon'
                                        />
                                    ))}
                                </span>

                                {item.doubleBeds} Double bed
                            </div>
                        )}

                        {item.singleBeds && (
                            <div className="meta-item">
                                <span className="meta-icon">
                                    {Array.from({ length: item.singleBeds }).map((_, index) => (
                                        <Image
                                            key={index}
                                            src="/assets/icon/single-bed.svg"
                                            width={20}
                                            height={20}
                                            alt='single-bed-icon'
                                        />
                                    ))}
                                </span>

                                {item.singleBeds} Single bed
                            </div>
                        )}

                        <div className="meta-item">
                            <span className="meta-icon">
                                {Array.from({ length: item.persons }).map((_, index) => (
                                    <Image
                                        key={index}
                                        src="/assets/icon/user.svg"
                                        width={20}
                                        height={20}
                                        alt='user-icon'
                                    />
                                ))}
                            </span>

                            {item.persons} Persons
                        </div>
                    </div>

                    <div className="details-label">Details</div>

                    <div className="bottom-box">
                        <div className="amenities-grid">

                            {item.details.map((detail, index) => (
                                <div className="amenity" key={index}>
                                    <span className="amenity-icon">
                                        <Image
                                            src={detail.icon}
                                            width={20}
                                            height={20}
                                            alt='ico'
                                        />
                                    </span>

                                    <span>{detail.label}</span>
                                </div>
                            ))}

                        </div>

                        <Link className="more-details" href={item.link}>
                            More details
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </Link>
                    </div>
                </div>

                <div className="pricing-panel">

                    {item.available === false ? (
                        <>
                            <div className="not-available">
                                Not Available
                            </div>

                            <button className="btn disable" disabled>
                                Reserve
                            </button>
                        </>
                    ) : (
                        <>
                            <span className="discount-tag">
                                {item.pricing.discount}
                            </span>

                            <div className="price-block">
                                <div className="flex-box">
                                    <span className="price-original">
                                        {item.pricing.originalPrice}
                                    </span>

                                    <span className="price-current">
                                        {item.pricing.currentPrice}
                                    </span>
                                </div>

                                <div className="price-per-night">
                                    x {item.pricing.nights} night
                                </div>

                                <div className="price-total">
                                    Total Price:
                                    <span> {item.pricing.totalPrice}</span>
                                </div>
                            </div>

                            <button className="btn">
                                Reserve
                            </button>
                        </>
                    )}

                </div>

            </div>
        </>
    )
}

export default SimilarPropertiesCard