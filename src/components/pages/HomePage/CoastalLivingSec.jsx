"use client"
import CustomSwiper from '@/components/organisms/CustomSwiper'
import { useState } from 'react'
import { CoastalLivingCardData } from '@/data/home/HomeData'
import Motion from '@/components/organisms/Animate'

const CoastalLivingSec = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <section>
                <div className="home-secD">
                    <Motion variant='fadeUp'>
                        <div className="container">
                            <div className="heading">
                                <h2>GOA: Our First Chapter in Coastal Living</h2>
                                <p>Thoughtfully built spaces designed for slow living, warm memories, and meaningful getaways.</p>
                            </div>

                            <ul className="tab-nav">
                                {
                                    CoastalLivingCardData.map(({ title }, i) => {
                                        return (
                                            <li onClick={() => setActiveTab(i)} className={activeTab === i ? "active" : ""} key={i}>{title}</li>
                                        )
                                    })
                                }
                            </ul>

                            <CustomSwiper
                                data={CoastalLivingCardData[activeTab].list}
                                spaceBetween="20"
                                speed="800"
                                slidesPerView="4"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                        speed: 500,
                                    },
                                    540: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        speed: 700,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        speed: 700,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                        speed: 700,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                        speed: 800,
                                    },
                                }}
                                swiperSlideCard="CoastalLivingCard"
                                navigation={true}
                                swiperNavClass="center-full-full"
                            />
                        </div>
                    </Motion>
                </div>
            </section>
        </>
    )
}

export default CoastalLivingSec