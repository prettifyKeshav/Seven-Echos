import Motion from '@/components/organisms/Animate'
import CustomSwiper from '@/components/organisms/CustomSwiper'
import React from 'react'

const WhatForYou = () => {
    return (
        <>
            <section>
                <div className="BecomeAnHost-secA">
                    <Motion variant='fadeUp'>
                        <div className="container">
                            <div className="heading">
                                <h2>What's in it for you</h2>
                                <p>End-to-end hosting and property care designed to protect your home and maximize its potential.</p>
                            </div>

                            <CustomSwiper
                                data={CardData}
                                swiperSlideCard="WhatForYouCard"
                                spaceBetween="20"
                                speed="800"
                                // slidesPerView="4"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1020: {
                                        slidesPerView: 3,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                    },
                                }}
                                swiperNavBtn=""
                                swiperNavClass=""
                                navigation={true}
                                showPagination={false}
                            />
                        </div>
                    </Motion>
                </div>
            </section>
        </>
    )
}

export default WhatForYou

const CardData = [
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/1.jpg",
        heading: "End-to-End Management",
        description: "Regular care to maintain your home’s charm and long-term value.",
    },
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/2.jpg",
        heading: "Carefree Monetization",
        description: "Earn effortlessly while we manage everything behind the scenes.",
    },
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/3.jpg",
        heading: "Curated Guest Profiles",
        description: "Vetted guests who treat your home with respect.",
    },
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/4.jpg",
        heading: "Brand-Led Positioning",
        description: "Presented as part of a refined, boutique collection.",
    },
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/1.jpg",
        heading: "End-to-End Management",
        description: "Regular care to maintain your home’s charm and long-term value.",
    },
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/2.jpg",
        heading: "Carefree Monetization",
        description: "Earn effortlessly while we manage everything behind the scenes.",
    },
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/3.jpg",
        heading: "Curated Guest Profiles",
        description: "Vetted guests who treat your home with respect.",
    },
    {
        figureImage: "/assets/images/becomeanhost/whatforyou/4.jpg",
        heading: "Brand-Led Positioning",
        description: "Presented as part of a refined, boutique collection.",
    }
]