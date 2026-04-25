import React from 'react'
import Image from 'next/image'

const CoastalLivingCard = ({
    SwiperHeading, SwiperImage, ImageWidth, ImageHeight
}) => {
    return (
        <>
            <div className="coastal-living-card">
                <figure>
                    <Image src={SwiperImage} width={ImageWidth} height={ImageHeight} alt="ico" ></Image>
                </figure>
                <figcaption>
                    <h4>{SwiperHeading}</h4>
                </figcaption>
            </div>
        </>
    )
}

export default CoastalLivingCard