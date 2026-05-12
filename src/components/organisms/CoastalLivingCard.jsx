import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CoastalLivingCard = ({
    SwiperHeading, SwiperImage, ImageWidth, ImageHeight, cardHref
}) => {
    return (
        <>
            <Link href={cardHref} className="coastal-living-card">
                <figure>
                    <Image src={SwiperImage} width={ImageWidth} height={ImageHeight} alt="ico" ></Image>
                </figure>
                <figcaption>
                    <h4>{SwiperHeading}</h4>
                </figcaption>
            </Link>
        </>
    )
}

export default CoastalLivingCard