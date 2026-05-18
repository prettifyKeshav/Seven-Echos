import ProjectListingPage from '@/components/pages/ProjectListing'
import React from 'react'

const page = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);
    return (
        <>
            <ProjectListingPage />
        </>
    )
}

export default page