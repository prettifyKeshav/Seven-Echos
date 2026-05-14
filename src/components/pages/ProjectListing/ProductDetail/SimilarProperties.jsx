"use client"
import CustomSwiper from '@/components/organisms/CustomSwiper'
import SimilarPropertiesCard from '@/components/organisms/SimilarPropertiesCard'
import { useState } from 'react'

const SimilarProperties = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <ul className="tab-nav">
                {
                    CoastalLivingCardData.map(({ title }, i) => {
                        return (
                            <li onClick={() => setActiveTab(i)} className={activeTab === i ? "active" : ""} key={i}>{title}</li>
                        )
                    })
                }
            </ul>

            {/* <CustomSwiper
                data={CoastalLivingCardData[activeTab].list}
                spaceBetween="20"
                speed="800"
                slidesPerView="4"
                swiperSlideCard="CoastalLivingCard"
                navigation={true}
                swiperNavClass="center-full-full"
            /> */}

            {
                SimilarPropertiesCardData.map((item, i) => {
                    return (
                        <SimilarPropertiesCard key={i} {...item} />
                    )
                })
            }



        </>
    )
}

export default SimilarProperties


const CoastalLivingCardData = [
    {
        title: "All Villas",
        list: [
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
        ]
    },

    {
        title: "1 Bed",
        list: [
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            }
        ]
    },

    {
        title: "2 Beds",
        list: [
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            }
        ]
    },
    {
        title: "3 Beds",
        list: [
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/1.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Assagao",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/2.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Calangute",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/3.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Bardez",
            },
            {
                cardHref: "/",
                SwiperImage: "/assets/images/home/coastal-living/4.jpg",
                ImageWidth: "915",
                ImageHeight: "477",
                SwiperHeading: "Panaji",
            }
        ]
    }
]


const SimilarPropertiesCardData = [
    {
        id: 1,
        title: "Superior Villa",

        rating: {
            label: "Excellent",
            reviews: "1,240 reviews",
            score: "5.0",
        },
        singleBeds: 2,
        persons: 2,

        details: [
            {
                icon: "/assets/icon/project-detail/similar-card/bread-slice.svg",
                label: "Breakfast",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/wifi.svg",
                label: "Free Wifi",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/sea.svg",
                label: "Sea View",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/arrows-expand.svg",
                label: "30 m2",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/no-smoking.svg",
                label: "No Smoking",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/winter.svg",
                label: "Air Conditioner",
            },
        ],

        images: [
            "/assets/images/project/detail/similar-properties/1.jpg",
            "/assets/images/project/detail/similar-properties/2.jpg",
            "/assets/images/project/detail/similar-properties/3.jpg",
            "/assets/images/project/detail/similar-properties/4.jpg",
        ],

        pricing: {
            discount: "15% off",
            originalPrice: "₹7,500",
            currentPrice: "₹5,000",
            nights: 5,
            totalPrice: "₹25,000",
        },

        link: "#",
    },

    {
        id: 2,
        title: "Luxury Suite",

        rating: {
            label: "Wonderful",
            reviews: "980 reviews",
            score: "4.8",
        },
        doubleBeds: 1,
        singleBeds: 2,
        persons: 2,

        details: [
            {
                icon: "/assets/icon/project-detail/similar-card/bread-slice.svg",
                label: "Breakfast",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/wifi.svg",
                label: "Free Wifi",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/sea.svg",
                label: "Mountain View",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/arrows-expand.svg",
                label: "45 m2",
            },
        ],

        images: [
            "/assets/images/project/detail/similar-properties/2.jpg",
            "/assets/images/project/detail/similar-properties/3.jpg",
        ],

        pricing: {
            discount: "10% off",
            originalPrice: "₹9,000",
            currentPrice: "₹8,100",
            nights: 3,
            totalPrice: "₹24,300",
        },

        link: "#",
    },

    {
        id: 3,
        title: "Family Deluxe Room",

        rating: {
            label: "Good",
            reviews: "540 reviews",
            score: "4.3",
        },
        doubleBeds: 1,
        persons: 4,

        available: false,

        details: [
            {
                icon: "/assets/icon/project-detail/similar-card/wifi.svg",
                label: "Free Wifi",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/sea.svg",
                label: "Garden View",
            },
        ],

        images: [
            "/assets/images/project/detail/similar-properties/5.jpg",
            "/assets/images/project/detail/similar-properties/6.jpg",
        ],

        link: "#",
    },

    {
        id: 4,
        title: "Superior Villa",

        rating: {
            label: "Excellent",
            reviews: "1,240 reviews",
            score: "5.0",
        },
        singleBeds: 1,
        persons: 2,

        details: [
            {
                icon: "/assets/icon/project-detail/similar-card/bread-slice.svg",
                label: "Breakfast",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/wifi.svg",
                label: "Free Wifi",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/sea.svg",
                label: "Sea View",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/arrows-expand.svg",
                label: "30 m2",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/no-smoking.svg",
                label: "No Smoking",
            },
            {
                icon: "/assets/icon/project-detail/similar-card/winter.svg",
                label: "Air Conditioner",
            },
        ],

        images: [
            "/assets/images/project/detail/similar-properties/1.jpg",
            "/assets/images/project/detail/similar-properties/2.jpg",
            "/assets/images/project/detail/similar-properties/3.jpg",
            "/assets/images/project/detail/similar-properties/4.jpg",
        ],

        pricing: {
            discount: "15% off",
            originalPrice: "₹7,500",
            currentPrice: "₹5,000",
            nights: 5,
            totalPrice: "₹25,000",
        },

        link: "#",
    },
];