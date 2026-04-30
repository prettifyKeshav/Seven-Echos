import Hero from '@/components/organisms/Hero'
import React from 'react'
import "@/uploads/styles/projects/projects.css"
import Cards from './Cards'


const ProjectListingPage = () => {
    return (
        <>
            <Hero
                bannerClassName="project-banner"
                imgSrc="/assets/images/project/project-banner.jpg"
                imgHeight="626"
                imgWidth="1028"
                heading="Projects"
                description="Discover our handpicked collection of premium villas, thoughtfully designed for comfort, privacy, and luxury living."
            />
            <Cards />
        </>
    )
}

export default ProjectListingPage