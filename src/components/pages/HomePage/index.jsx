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
import ReasonStay from './ReasonStay'

const HomePage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/home-banner.mp4"
                poster="/assets/video/home-banner.png"
                imgHeight="626"
                imgWidth="1028"
                heading="Where Every Stay Feels Like Coming Home"
                description="Stay at the finest villas, bungalows, apartments/flats that feel like home."
            />
            <PeopleBehind />
            <HomesCrafted />
            <OurVillasSec />
            <CoastalLivingSec />
            <ShareHomeStory />
            <ReasonStay />
            <GuestExperiences />
            <Amenities />
            <NewHomes />
        </>
    )
}

export default HomePage