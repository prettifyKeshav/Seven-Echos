import Hero from '@/components/organisms/Hero'
import React from 'react'
import "@/uploads/styles/home/home.css"
import PeopleBehind from './PeopleBehind'
import HomesCrafted from './HomesCrafted'
import OurVillasSec from './OurVillasSec'

const HomePage = () => {
    return (
        <>
            <Hero
                imgSrc="/assets/images/home/home-banner.jpg"
                imgHeight="626"
                imgWidth="1028"
            />
            <PeopleBehind />
            <HomesCrafted />
            <OurVillasSec />
        </>
    )
}

export default HomePage