import AboutUsPage from '@/components/pages/AboutUsPage'
import React from 'react'

const page = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(2000);
    return (
        <>
            <AboutUsPage />
        </>
    )
}

export default page