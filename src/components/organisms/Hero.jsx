import React from 'react'
import Image from 'next/image'

const Hero = ({
    imgSrc,
    imgHeight,
    imgWidth
}) => {
    return (
        <>
            <div className="hero-banner">
                <div className="bg-background">
                    <Image src={imgSrc} height={imgHeight} width={imgWidth} alt='banner image'></Image>
                    <div className="container">
                        <div className="bg-wrapper">
                            <h1>Where Every Stay Feels Like Coming Home</h1>
                            <p>Stay at the finest villas, bungalows, apartments/flats that feel like home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero