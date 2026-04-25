"use client"
import CoastalLivingCard from '@/components/organisms/CoastalLivingCard'
import CustomSwiper from '@/components/organisms/CustomSwiper'
import React, { useState } from 'react'

const CoastalLivingSec = () => {
    const [activeTab, setActiveTab] = useState(0)


    return (
        <>
            <section>
                <div className="home-secD">
                    <div className="container">
                        <div className="heading">
                            <h2>GOA: Our First Chapter in Coastal Living</h2>
                            <p>Thoughtfully built spaces designed for slow living, warm memories, and meaningful getaways.</p>
                        </div>

                        <ul className="tab-nav">
                            {
                                CardData?.map(({ title }, i) => <li onClick={() => setActiveTab(i)} className={activeTab === i ? "active" : ""} key={i}>{title}</li>)
                            }
                        </ul>

                        <CustomSwiper
                            data={CardData[activeTab].list}
                            spaceBetween="20"
                            speed="800"
                            slidesPerView="4"
                            swiperSlideCard="CoastalLivingCard"
                            navigation={true}
                            swiperNavClass="center-full-full"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoastalLivingSec

const CardData = [
    {
        title: "North Goa (Popular & Lively)",
        list: [
            {
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
        ]
    },
    {
        title: "Central Goa / Panaji (Cultural)",
        list: [
            {
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            }
        ]
    },
    {
        title: "South Goa (Quiet & Scenic)",
        list: [
            {
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            }
        ]
    },
    {
        title: "Others",
        list: [
            {
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            }
        ]
    }
]