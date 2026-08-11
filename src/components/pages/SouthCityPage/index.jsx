import React from 'react'
import Hero from '@/components/frontendcomponents/organisms/Hero'
import "@/uploads/styles/travel-guide/travel-guide.css"
import DirectionSec from '../TravelGuidePage/DirectionSec'
import JourneyAwaitsSec from '../TravelGuidePage/JourneyAwaitsSec'
import ExploreNearby from './ExploreNearby'

const SouthCityPage = () => {

    const directionData = {
        heading: {
            title: "Slow, Scenic & Serene",
            subtitle: "South Goa",
            description:
                "Where time moves gently and nature takes center stage. Discover untouched beaches, lush landscapes, and the quiet luxury of authentic Goan life.",
        },
        image: {
            src: "/assets/images/travel-guide/travel-guide-secB.jpg",
            alt: "South Goa",
        },
    };

    const journeyAwaitsData = {
        heading: {
            title: "Your Journey Awaits",
            subtitle: "Experience Goa the",
            highlight: "Seven Echoes Way",
            description:
                "Slow, soulful, and beautifully curated. Let us craft your perfect Goan escape where every moment is intentional and every experience, unforgettable.",
        },
        buttons: [
            {
                text: "Plan your stay",
                href: "/",
            },
            {
                text: "Explore with Seven Echoes",
                href: "/",
            },
        ],
    };
    return (
        <>
            <Hero
                bannerClassName="travel-guide-banner"
                imgSrc="/assets/images/travel-guide/travel-guide-banner.jpg"
                imgHeight="626"
                imgWidth="1028"
                heading="A Thoughtful Journey Through Goa"
                subHeading="Explore Goa,"
                description="A thoughtfully curated North & South Goa travel guide blending culture, beaches, food, nature, and slow luxury."
            />
            <DirectionSec {...directionData} />
            <ExploreNearby />
            <JourneyAwaitsSec {...journeyAwaitsData} />
        </>
    )
}

export default SouthCityPage