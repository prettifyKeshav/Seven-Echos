import React from 'react'
import Hero from '@/components/frontendcomponents/organisms/Hero'
import "@/uploads/styles/travel-guide/travel-guide.css"
import DirectionSec from '../TravelGuidePage/DirectionSec'
import JourneyAwaitsSec from '../TravelGuidePage/JourneyAwaitsSec'
import CultureHeritage from './CultureHeritage'
import ExploreNearby from './ExploreNearby'

const NorthCityPage = () => {

    const directionData = {
        heading: {
            title: "Vibrant & Cultural",
            subtitle: "North Goa",
            description:
                "Where Portuguese heritage meets bohemian soul discover the cultural heart of Goa through its cafés, beaches, and timeless streets.",
        },
        image: {
            src: "/assets/images/travel-guide/travel-guide-secA.png",
            alt: "North Goa",
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
            <CultureHeritage />
            <ExploreNearby />
            <JourneyAwaitsSec {...journeyAwaitsData} />
        </>
    )
}

export default NorthCityPage