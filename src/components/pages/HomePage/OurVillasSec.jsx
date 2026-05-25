import CustomSwiper from '@/components/organisms/CustomSwiper'
import React from 'react'
import Link from 'next/link'
import { OurVillasCardsData } from '@/data/home/HomeData'
import Motion from '@/components/organisms/Animate'

const OurVillasSec = () => {

    return (
        <>
            <section>
                <div className="home-secC">
                    <Motion variant='fadeUp'>
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
                            />

                            <div className="bottom-btn">
                                <Link href="/projects" className="view-all-btn">View All</Link>
                            </div>

                        </div>
                    </Motion>
                </div>
            </section>
        </>
    )
}

export default OurVillasSec

