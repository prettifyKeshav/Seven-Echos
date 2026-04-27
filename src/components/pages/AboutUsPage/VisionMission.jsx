import React from 'react'
import Image from 'next/image'

const VisionMission = () => {
    return (
        <>
            <section>
                <div className="about-secB">
                    <div className="container">
                        <figure>
                            <Image src="/assets/images/about/vision.jpg" width={1280} height={480} alt="ico"></Image>
                            <figcaption>
                                <h2>Our <span>Vision</span></h2>
                                <p>To become the echo travellers carry long after they leave. Creating a circle of homes, hosts, and moments so thoughtfully curated that every stay feels intimate, unforgettable, and quietly worth returning to.</p>
                            </figcaption>
                        </figure>

                        <figure>
                            <Image src="/assets/images/about/mission.jpg" width={1280} height={480} alt="ico"></Image>
                            <figcaption>
                                <h2>Our <span>Mission</span></h2>
                                <p>To shape refined, character-led homes that blend hotel-grade reliability with the warmth of lived-in spaces. Through thoughtful design, intuitive service, and sensory detail, we ensure every Seven Echoes stay lingers as a gentle, luxurious memory.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionMission