import React from 'react'
import Image from 'next/image'

const TestimonialsCard = ({ ...item }) => {
    return (
        <>
            <div className="testimonials-card">
                <figure>
                    <Image src={item.figureImg} width={720} height={388} alt="ico" ></Image>
                </figure>
                <figcaption>
                    <p>{item.description}</p>

                    <div className="bottom-flex">
                        <div className="figure">
                            <Image src={item.userImg} width={78} height={78} alt="user ico"></Image>
                        </div>
                        <div className="user-details">
                            <h5>{item.userName}</h5>
                            <p>{item.userLocation}</p>
                        </div>
                    </div>
                </figcaption>
            </div>
        </>
    )
}

export default TestimonialsCard