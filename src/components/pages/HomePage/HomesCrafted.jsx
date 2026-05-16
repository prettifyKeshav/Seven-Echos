import CustomSwiper from '@/components/organisms/CustomSwiper'
import React from 'react'
import { HomesCraftedData } from '@/data/home/HomeData'
import Motion from '@/components/organisms/Animate'

const HomesCrafted = () => {

    return (
        <>
            <section>
                <div className="home-secB" >
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Homes Crafted With Heart</h2>
                                <p>Thoughtfully built spaces designed for slow living, warm memories, and meaningful getaways.</p>
                            </div>
                        </Motion>
                    </div>
                    <CustomSwiper
                        data={HomesCraftedData}
                        spaceBetween="0"
                        speed="800"
                        slidesPerView="1"
                        showPagination={true}

                    />
                </div>
            </section>
        </>
    )
}

export default HomesCrafted