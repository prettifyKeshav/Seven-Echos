"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SimilarPropertiesCard = ({ title, ...item }) => {
    return (
        <>
            <div className="similar-properties-card">

                <div className="image-slider">
                    <Swiper
                        spaceBetween={0}
                        speed={500}
                        slidesPerView={1}
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

// const SimilarPropertiesCardData = [
//     {

//         id: 1,
//         title: "Superior Villa",

//         rating: {
//             label: "Excellent",
//             reviews: "1,240 reviews",
//             score: "5.0",
//         },
//         tabCategory: "2 Beds",
//         singleBeds: 2,
//         persons: 2,

//         details: [
//             {
//                 icon: "/assets/icon/project-detail/similar-card/bread-slice.svg",
//                 label: "Breakfast",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/wifi.svg",
//                 label: "Free Wifi",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/sea.svg",
//                 label: "Sea View",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/arrows-expand.svg",
//                 label: "30 m2",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/no-smoking.svg",
//                 label: "No Smoking",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/winter.svg",
//                 label: "Air Conditioner",
//             },
//         ],

//         images: [
//             "/assets/images/project/detail/similar-properties/1.jpg",
//             "/assets/images/project/detail/similar-properties/2.jpg",
//             "/assets/images/project/detail/similar-properties/3.jpg",
//             "/assets/images/project/detail/similar-properties/4.jpg",
//         ],

//         pricing: {
//             discount: "15% off",
//             originalPrice: "₹7,500",
//             currentPrice: "₹5,000",
//             nights: 5,
//             totalPrice: "₹25,000",
//         },

//         link: "#",
//     },

//     {
//         id: 2,
//         title: "Luxury Suite",

//         rating: {
//             label: "Wonderful",
//             reviews: "980 reviews",
//             score: "4.8",
//         },
//         tabCategory: "3 Beds",
//         doubleBeds: 1,
//         singleBeds: 2,
//         persons: 2,

//         details: [
//             {
//                 icon: "/assets/icon/project-detail/similar-card/bread-slice.svg",
//                 label: "Breakfast",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/wifi.svg",
//                 label: "Free Wifi",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/sea.svg",
//                 label: "Mountain View",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/arrows-expand.svg",
//                 label: "45 m2",
//             },
//         ],

//         images: [
//             "/assets/images/project/detail/similar-properties/2.jpg",
//             "/assets/images/project/detail/similar-properties/3.jpg",
//         ],

//         pricing: {
//             discount: "10% off",
//             originalPrice: "₹9,000",
//             currentPrice: "₹8,100",
//             nights: 3,
//             totalPrice: "₹24,300",
//         },

//         link: "#",
//     },

//     {
//         id: 3,
//         title: "Family Deluxe Room",

//         rating: {
//             label: "Good",
//             reviews: "540 reviews",
//             score: "4.3",
//         },
//         tabCategory: "1 Bed",
//         doubleBeds: 1,
//         persons: 4,

//         available: false,

//         details: [
//             {
//                 icon: "/assets/icon/project-detail/similar-card/wifi.svg",
//                 label: "Free Wifi",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/sea.svg",
//                 label: "Garden View",
//             },
//         ],

//         images: [
//             "/assets/images/project/detail/similar-properties/5.jpg",
//             "/assets/images/project/detail/similar-properties/6.jpg",
//         ],

//         link: "#",
//     },

//     {
//         id: 4,
//         title: "Superior Villa",

//         rating: {
//             label: "Excellent",
//             reviews: "1,240 reviews",
//             score: "5.0",
//         },
//         tabCategory: "1 Bed",
//         singleBeds: 1,
//         persons: 2,

//         details: [
//             {
//                 icon: "/assets/icon/project-detail/similar-card/bread-slice.svg",
//                 label: "Breakfast",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/wifi.svg",
//                 label: "Free Wifi",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/sea.svg",
//                 label: "Sea View",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/arrows-expand.svg",
//                 label: "30 m2",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/no-smoking.svg",
//                 label: "No Smoking",
//             },
//             {
//                 icon: "/assets/icon/project-detail/similar-card/winter.svg",
//                 label: "Air Conditioner",
//             },
//         ],

//         images: [
//             "/assets/images/project/detail/similar-properties/1.jpg",
//             "/assets/images/project/detail/similar-properties/2.jpg",
//             "/assets/images/project/detail/similar-properties/3.jpg",
//             "/assets/images/project/detail/similar-properties/4.jpg",
//         ],

//         pricing: {
//             discount: "15% off",
//             originalPrice: "₹7,500",
//             currentPrice: "₹5,000",
//             nights: 5,
//             totalPrice: "₹25,000",
//         },

//         link: "#",
//     },
// ];