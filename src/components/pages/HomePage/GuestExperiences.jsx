import React from 'react'
import Image from 'next/image'
import Motion from '@/components/organisms/Animate'

const GuestExperiences = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="home-secF">
                        <div className="flex-box">
                            <Motion variant='fadeRight'>
                                <figcaption>
                                    <h2>Curated Guest Experiences</h2>
                                    <p>Stay at the finest villas, bungalows, apartments/flats that feel like home.</p>
                                </figcaption>
                            </Motion>

                            <Motion variant='fadeLeft'>
                                <div className="grid-box">
                                    {
                                        BoxData.map((item, i) => {
                                            return (
                                                <div className="grid-box-item" key={i}>
                                                    <figure>
                                                        <Image src={item.figureImage} width={25} height={25} alt="ico" ></Image>
                                                    </figure>
                                                    <h4>{item.heading}</h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Motion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GuestExperiences

const BoxData = [
    {
        figureImage: "/assets/images/home/curated-guest/1.svg",
        heading: "Guided Local Tours",
        desc: "Explore hidden gems with expert guides."
    },
    {
        figureImage: "/assets/images/home/curated-guest/2.svg",
        heading: "Hygiene Products",
        desc: "Premium essentials for a comfortable stay."
    },
    {
        figureImage: "/assets/images/home/curated-guest/3.svg",
        heading: "Housekeeping",
        desc: "Daily cleaning to keep your stay spotless."
    },
    {
        figureImage: "/assets/images/home/curated-guest/4.svg",
        heading: "Pre-arrival Home Setup",
        desc: "Everything prepared before you arrive."
    },
    {
        figureImage: "/assets/images/home/curated-guest/5.svg",
        heading: "On-call Guest Support",
        desc: "Assistance anytime you need us."
    },
    {
        figureImage: "/assets/images/home/curated-guest/6.svg",
        heading: "On-call Guest Support",
        desc: "Here are two alternatives so both cards don’t repeat."
    },
]