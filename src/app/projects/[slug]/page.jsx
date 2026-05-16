import ProductDetail from '@/components/pages/ProjectListing/ProductDetail'
import React from 'react'

const page = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(2000);
    return (
        <>
            <ProductDetail />
        </>
    )
}

export default page