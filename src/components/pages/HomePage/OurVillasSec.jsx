import CustomSwiper from '@/components/organisms/CustomSwiper'
import React from 'react'
import Link from 'next/link'
import { OurVillasCardsData } from '@/data/home/HomeData'

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
                            spaceBetween="10"
                            speed="800"
                            slidesPerView="4"
                            swiperSlideCard="ProjectsCard"
                            showPagination={false}
                            navigation={true}
                            swiperNavBtn="product-btn"
                        />

                        <div className="bottom-btn">
                            <Link href="/projects" className="view-all-btn">View All</Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurVillasSec