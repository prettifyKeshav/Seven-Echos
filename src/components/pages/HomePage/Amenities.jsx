import React from 'react'
import Image from 'next/image'
import { AmenitiesData } from '@/data/home/HomeData'
import Motion from '@/components/organisms/Animate'
const Amenities = () => {
    return (
        <>
            <section>
                <div className="home-secG">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Everything You Need for a Homely Stay</h2>
                                <p>Comforts that feel familiar, warm, and effortless just like home should be.</p>
                            </div>
                        </Motion>

                        <Motion variant='fadeUp'>
                            <div className="flex-box">
                                <figure>
                                    <Image src="/assets/images/home/amenities-img.jpg" width={480} height={831} alt="ico"></Image>
                                </figure>
                                <div className="grid-box">
                                    {
                                        AmenitiesData.map((item, i) => {
                                            return (
                                                <div className="col" key={i}>
                                                    <figure>
                                                        <Image src={item.amenitiesImage} width={35} height={35} alt='ico'></Image>
                                                    </figure>
                                                    <figcaption>
                                                        <h5>{item.heading}</h5>
                                                        <p>{item.desc}</p>
                                                    </figcaption>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Amenities