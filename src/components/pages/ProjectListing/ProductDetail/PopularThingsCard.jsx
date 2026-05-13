import React from 'react'
import Image from 'next/image'

const PopularThingsCard = ({ i, ...item }) => {
    return (
        <>
            <div className="popular-things-card" key={i}>
                <figure>
                    <Image src={item.figureImage} width={355} height={320} alt='ico'></Image>
                    <div className="flex-box">
                        <div className="things-category">
                            <p>Beach</p>
                        </div>
                        <div className="distance">
                            <p>600 m away</p>
                        </div>
                    </div>
                </figure>
                <figcaption>
                    <h4>{item.heading}</h4>
                </figcaption>
            </div>
        </>
    )
}

export default PopularThingsCard