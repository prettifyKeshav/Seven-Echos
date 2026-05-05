import ProjectsCard from '@/components/organisms/ProjectsCard'

import React from 'react'

const Cards = () => {
    return (
        <>
            <section>
                <div className="projects-sec">
                    <div className="container">
                        <div className="flex-box">
                            <aside>
                                Filter
                            </aside>
        
                            <div className="cards-wrapper">
                                {
                                    OurVillasCardsData.map((item, i) => (
                                        <ProjectsCard key={i} {...item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards

export const OurVillasCardsData = [
    {
        "link": "/projects/villa-serene-cove",
        "tag": "Getaway Deal",
        "images": [
            "/assets/images/home/our-villas/1.jpg",
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/4.jpg"
        ],
        "title": "Villa Serene Cove",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    },
    {
        "link": "/projects/the-palm-haven",
        "tag": "Best Value",
        "images": [
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/4.jpg",
            "/assets/images/home/our-villas/1.jpg"
        ],

        "title": "The Palm Haven",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    },
    {
        "link": "/projects/casa-blu-vista",
        "tag": "Guest Favourite",
        "images": [
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/4.jpg",
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/1.jpg"
        ],

        "title": "Casa Blu Vista",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    },
    {
        "link": "/projects/azure-breeze-villa",
        "tag": "Best Location",
        "images": [
            "/assets/images/home/our-villas/4.jpg",
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/1.jpg"
        ],

        "title": "Azure Breeze Villa",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    },
    {
        "link": "/projects/villa-solaria",
        "tag": "Best Value",
        "images": [
            "/assets/images/home/our-villas/1.jpg",
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/4.jpg"
        ],
        "title": "Villa Solaria",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    },
    {
        "link": "/projects/moonstone-escape",
        "images": [
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/4.jpg",
            "/assets/images/home/our-villas/1.jpg"
        ],

        "title": "Moonstone Escape",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    },
    {
        "link": "/projects/emerald-bay-villa",
        "tag": "Getaway Deal",
        "images": [
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/4.jpg",
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/1.jpg"
        ],

        "title": "Emerald Bay Villa",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    },
    {
        "link": "/projects/the-orchid-hideaway",
        "tag": "Getaway Deal",
        "images": [
            "/assets/images/home/our-villas/4.jpg",
            "/assets/images/home/our-villas/2.jpg",
            "/assets/images/home/our-villas/3.jpg",
            "/assets/images/home/our-villas/1.jpg"
        ],

        "title": "The Orchid Hideaway",
        "rating": 5,
        "location": "Calangute, Goa",

        "reviews": {
            "score": 5.0,
            "label": "Excellent",
            "count": 1260
        },
        "description": "Luxury Hotel | Sea View Room · King Bed",

        "pricing": {
            "discount": "10% off",
            "oldPrice": 1800,
            "newPrice": 3000,
            "meta": "1 night, 2 adults"
        }
    }
]