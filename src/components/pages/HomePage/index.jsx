import Hero from '@/components/organisms/Hero'
import React from 'react'
import "@/uploads/styles/home/home.css"
import "@/uploads/styles/component/component.css"
import PeopleBehind from './PeopleBehind'
import HomesCrafted from './HomesCrafted'
import OurVillasSec from './OurVillasSec'
import CoastalLivingSec from './CoastalLivingSec'
import ShareHomeStory from './ShareHomeStory'
import GuestExperiences from './GuestExperiences'
import Amenities from './Amenities'
import NewHomes from './NewHomes'

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
            <CoastalLivingSec />
            <ShareHomeStory />
            <GuestExperiences />
            <Amenities />
            <NewHomes />
        </>
    )
}

export default HomePage