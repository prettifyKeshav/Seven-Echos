import React from 'react';
import Image from 'next/image';
import Motion from './Animate';

const Hero = ({
    imgSrc,
    imgHeight,
    imgWidth,
    heading,
    description,
    bannerClassName,
    bgType = "image",
}) => {
    return (
        <div className={`hero-banner ${bannerClassName || ""}`}>
            <div className="bg-background">

                {bgType === "video" ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={imgSrc} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src={imgSrc}
                        height={imgHeight}
                        width={imgWidth}
                        alt="banner image"
                    />
                )}

                <div className="container">
                    <div className="bg-wrapper">
                        <Motion variant="fadeUp">
                            <h1>{heading}</h1>
                            <p>{description}</p>
                        </Motion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;