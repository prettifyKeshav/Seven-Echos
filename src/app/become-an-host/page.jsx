import BecomeAnHost from '@/components/pages/BecomeAnHost'
import React from 'react'

const page = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);
    return (
        <>
            <BecomeAnHost />
        </>
    )
}

export default page