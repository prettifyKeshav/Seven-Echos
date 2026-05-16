import React from 'react'
import Image from 'next/image'
import Motion from './Animate'

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
                        <div className="bg-wrapper" >
                            <Motion variant="fadeUp">
                                <h1>{heading}</h1>
                                <p>{description}</p>
                            </Motion>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero