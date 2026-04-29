import React from 'react'
import Image from 'next/image'

const WhatForYouCard = ({...item}) => {
    return (
        <>
            <div className="WhatForYouCard">
                <figure>
                    <Image src={item.figureImage} width={355} height={515} alt="ico"></Image>
                </figure>
                <figcaption>
                    <h5>{item.heading}</h5>
                    <p>{item.description}</p>
                </figcaption>
            </div>
        </>
    )
}

export default WhatForYouCard