import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Motion from '@/components/organisms/Animate'

const PeopleBehind = () => {
    return (
        <section>
            <div className="home-secA">
                <div className="container">
                    <Motion variant="fadeUp">
                        <h2>The People Behind These Homes</h2>
                    </Motion>
                    <div className="flex-box">
                        <Motion variant="fadeRight">
                            <div className="col">
                                <figcaption>
                                    <p>As Shubham Jain and Bhavuk Gupta traveled the world, they noticed something missing: hospitality that lacked the true spirit of "home."</p>
                                    <p>With deep expertise in real estate, finance, and market forecasting, they set out to create stays that feel less like a booking and more like a warm welcome.</p>
                                    <p>Their goal? To ensure every stay leaves a <span>gentle echo of comfort and belonging.</span></p>
                                    <Link href="/about-us" className="btn">Read More</Link>
                                </figcaption>
                            </div>
                        </Motion>

                        <Motion variant="fadeLeft">
                            <div className="col" >
                                <figure>
                                    <Image src='/assets/images/home/management.png' width={729} height={737} alt="ico" ></Image>
                                </figure>
                            </div>
                        </Motion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PeopleBehind