import React from 'react'
import Image from 'next/image'

const ExperiencesReside = () => {
    return (
        <>
            <section>
                <div className="about-secA">
                    <div className="container">
                        <div className="heading">
                            <h2>Curating Stays Where Experiences Reside</h2>
                        </div>

                        <div className="flex-box">
                            <figure>
                                <Image src="/assets/images/about/experince/1.jpg" width={782} height={338} alt="ico" ></Image>
                            </figure>
                            <figcaption>
                                <p>Seven Echoes curates a collection of luxury villas, bungalows, and apartments that feel less like temporary stays and more like beautifully kept homes. Every space is thoughtfully situated and elegantly designed to offer privacy, comfort, and a gentle sense of calm—the kind of environment where time slows down and you can truly arrive.</p>
                            </figcaption>
                        </div>

                        <div className="flex-box">
                            <figure>
                                <Image src="/assets/images/about/experince/2.jpg" width={782} height={338} alt="ico" ></Image>
                            </figure>
                            <figcaption>
                                <p>While there are many companies offering similar services, what sets Seven Echoes apart is the quality and consistency of its experience. Where others often lack coordination and service standards, Seven Echoes focuses on seamless management, thoughtful details, and hospitality that quietly exceeds expectations.</p>
                            </figcaption>
                        </div>

                        <div className="flex-box">
                            <figure>
                                <Image src="/assets/images/about/experince/3.jpg" width={782} height={338} alt="ico" ></Image>
                            </figure>
                            <figcaption>
                                <p>The name “Seven Echoes” is inspired by the seven circles of life—the many phases, moods, and journeys we move through over time. Each stay is imagined as one of these circles, a moment within a larger continuum. The “echoes” are the feelings and memories that linger long after you leave—the soft imprint of a sunrise on the balcony, a quiet conversation in the living room, the stillness of a slow morning. Together, Seven Echoes speaks to travel that doesn’t just pass by, but gently stays with you.</p>
                            </figcaption>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ExperiencesReside