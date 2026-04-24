import CustomSwiper from '@/components/organisms/CustomSwiper'
import React from 'react'

const HomesCrafted = () => {

    const CardsData = [
        {
            SwiperHref: "",
            SwiperImage: "/assets/images/home/projects-1.jpg",
            ImageWidth: "2948",
            ImageHeight: "2948",
            SwiperHeading: "Villa Serene Cove",
            SwiperDescription: "Calangute, Goa"
        },
        {
            SwiperHref: "",
            SwiperImage: "/assets/images/home/projects-1.jpg",
            ImageWidth: "2948",
            ImageHeight: "2948",
            SwiperHeading: "The Palm Haven",
            SwiperDescription: "Anjuna, Goa"
        },
        {
            SwiperHref: "",
            SwiperImage: "/assets/images/home/projects-1.jpg",
            ImageWidth: "2948",
            ImageHeight: "2948",
            SwiperHeading: "Casa Blu Vista",
            SwiperDescription: "Colva, Goa"
        },
        {
            SwiperHref: "",
            SwiperImage: "/assets/images/home/projects-1.jpg",
            ImageWidth: "2948",
            ImageHeight: "2948",
            SwiperHeading: "Azure Breeze Villa",
            SwiperDescription: "Vagator, Goa"
        }
    ]

    return (
        <>
            <section>
                <div className="home-secB">
                    <div className="container">
                        <div className="heading">
                            <h2>Homes Crafted With Heart</h2>
                            <p>Thoughtfully built spaces designed for slow living, warm memories, and meaningful getaways.</p>
                        </div>
                    </div>
                    <CustomSwiper
                        data={CardsData}
                        spaceBetween="0"
                        speed="800"
                        slidesPerView="1"

                    />
                </div>
            </section>
        </>
    )
}

export default HomesCrafted