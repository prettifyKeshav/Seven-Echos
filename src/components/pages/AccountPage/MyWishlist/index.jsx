import ProjectsCard from '@/components/organisms/ProjectsCard'
import React from 'react'

const MyWishlist = ({
    data = OurVillasCardsData,
}) => {
    return (
        <>
            <div className="my-wishlist-grid">
                {data.map((item, i) => (
                    <div className="col" key={i}>
                        <ProjectsCard {...item} isWishlistFill={true}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MyWishlist

export const OurVillasCardsData = [
    {
        "link": "/projects/villa-serene-cove",
        "tag": "Getaway Deal",
        "images": [
            "/assets/images/home/our-villas/1.jpg",
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
        "link": "/projects/villa-serene-cove",
        "tag": "Best Value",
        "images": [,
            "/assets/images/home/our-villas/1.jpg"
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
        "link": "/projects/villa-serene-cove",
        "tag": "Guest Favourite",
        "images": [
            "/assets/images/home/our-villas/3.jpg",
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
        "link": "/projects/villa-serene-cove",
        "tag": "Best Location",
        "images": [
            "/assets/images/home/our-villas/4.jpg",
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
        "link": "/projects/villa-serene-cove",
        "tag": "Best Value",
        "images": [
            "/assets/images/home/our-villas/1.jpg",
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
        "link": "/projects/villa-serene-cove",
        "images": [,
            "/assets/images/home/our-villas/1.jpg"
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
        "link": "/projects/villa-serene-cove",
        "tag": "Getaway Deal",
        "images": [
            "/assets/images/home/our-villas/3.jpg",
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
        "link": "/projects/villa-serene-cove",
        "tag": "Getaway Deal",
        "images": [
            "/assets/images/home/our-villas/4.jpg",
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
    }
]