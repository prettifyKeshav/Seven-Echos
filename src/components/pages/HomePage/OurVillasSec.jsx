import CustomSwiper from '@/components/organisms/CustomSwiper'
import React from 'react'
import { OurVillasCardsData } from '@/data/home/OurVillasCardsData'

const OurVillasSec = () => {

    return (
        <>
            <section>
                <div className="home-secC">
                    <div className="container">
                        <div className="heading">
                            <h2>Our Villas</h2>
                        </div>

                        <CustomSwiper
                            data={OurVillasCardsData}
                            spaceBetween="20"
                            speed="800"
                            slidesPerView="4"
                            swiperSlideCard="VillasCard"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurVillasSec