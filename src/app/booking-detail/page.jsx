import BookingDetailPage from '@/components/pages/BookingDetailPage'
import React from 'react'

const page = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);
    return (
        <>
            <BookingDetailPage />
        </>
    )
}

export default page