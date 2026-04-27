import React from 'react'
import Image from 'next/image'

const Hero = ({
    imgSrc,
    imgHeight,
    imgWidth,
    heading,
    description,
    bannerClassName
}) => {
    return (
        <>
            <div className={`hero-banner ${bannerClassName || ""} `}>
                <div className="bg-background">
                    <Image src={imgSrc} height={imgHeight} width={imgWidth} alt='banner image'></Image>
                    <div className="container">
                        <div className="bg-wrapper">
                            <h1>{heading}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero