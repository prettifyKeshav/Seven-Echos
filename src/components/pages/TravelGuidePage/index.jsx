import Hero from '@/components/organisms/Hero'
import React from 'react'
import  "@/uploads/styles/travel-guide/travel-guide.css"

const TravelGuidePage = () => {
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
        </>
    )
}

export default TravelGuidePage