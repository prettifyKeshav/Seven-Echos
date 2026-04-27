import Hero from '@/components/organisms/Hero'
import React from 'react'
import ExperiencesReside from './ExperiencesReside'
import "@/uploads/styles/about-us/about-us.css"
import VisionMission from './VisionMission'

const AboutUsPage = () => {
    return (
        <>
            <Hero
                bannerClassName="about-banner"
                imgSrc="/assets/images/about/banner.jpg"
                imgHeight="626"
                imgWidth="1028"
                heading="About Us"
                description="We craft thoughtful experiences with passion, precision, and purpose."
            />
            <ExperiencesReside />
            <VisionMission />
        </>
    )
}

export default AboutUsPage