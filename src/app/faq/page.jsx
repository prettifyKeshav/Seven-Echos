import FaqPage from '@/components/pages/FaqPage'
import React from 'react'

const page = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);
    return (
        <>
            <FaqPage />
        </>
    )
}

export default page