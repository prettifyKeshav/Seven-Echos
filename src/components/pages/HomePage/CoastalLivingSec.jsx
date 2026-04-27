"use client"
import CustomSwiper from '@/components/organisms/CustomSwiper'
import { useState } from 'react'
import { CoastalLivingCardData } from '@/data/home/HomeData'

const CoastalLivingSec = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            <section>
                <div className="home-secD">
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
                            swiperSlideCard="CoastalLivingCard"
                            navigation={true}
                            swiperNavClass="center-full-full"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoastalLivingSec