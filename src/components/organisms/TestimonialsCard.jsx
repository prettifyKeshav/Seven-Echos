import React from 'react'
import Image from 'next/image'

const TestimonialsCard = () => {
    return (
        <>
            <div className="testimonials-card">
                <figure>
                    <Image src="/assets/images/becomeanhost/transparency/1.jpg" width={720} height={388} alt="ico" ></Image>
                </figure>
                <figcaption>
                    <p>"The day I metSeven Echoes team, their professionalism, commitment & collaborative spirit left a positive impact, which encouraged me to work together. 5 months since I entered a partnership, together we've streamlined operations & built a convincing foundations to achieve key milestones in the future."</p>

                    <div className="bottom-flex">
                        <div className="figure">
                            <Image src="/assets/images/becomeanhost/transparency/user1.png" width={78} height={78} alt="user ico"></Image>
                        </div>
                        <div className="user-details">
                            <h5>Vikas Arora</h5>
                            <p>Ekant Villa, Goa</p>
                        </div>
                    </div>
                </figcaption>
            </div>
        </>
    )
}

export default TestimonialsCard