import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PeopleBehind = () => {
    return (
        <section>
            <div className="home-secA">
                <div className="container">
                    <h2>The People Behind These Homes</h2>
                    <div className="flex-box">
                        <div className="col">
                            <figcaption>
                                <p>As Shubham Jain and Bhavuk Gupta traveled the world, they noticed something missing: hospitality that lacked the true spirit of "home."</p>
                                <p>With deep expertise in real estate, finance, and market forecasting, they set out to create stays that feel less like a booking and more like a warm welcome.</p>
                                <p>Their goal? To ensure every stay leaves a <span>gentle echo of comfort and belonging.</span></p>
                                <Link href="" className="btn">Read More</Link>
                            </figcaption>
                        </div>

                        <div className="col">
                            <figure>
                                <Image src='/assets/images/home/management.png' width={729} height={737} alt="ico" ></Image>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PeopleBehind