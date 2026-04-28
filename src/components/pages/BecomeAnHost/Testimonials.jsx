import CustomSwiper from '@/components/organisms/CustomSwiper'
import TestimonialsCard from '@/components/organisms/TestimonialsCard'
import React from 'react'

const Testimonials = () => {
    return (
        <>
            <section>
                <div className="BecomeAnHost-secB">
                    <div className="container">
                        <div className="heading">
                            <h2>Transparency is key</h2>
                            <p>No hidden costs, no unexpected surprises our commitment to transparency truly sets us apart.</p>
                        </div>

                        <TestimonialsCard />

                        {/* <CustomSwiper
                            data={HomesCraftedData}
                            spaceBetween="20"
                            speed="800"
                            slidesPerView="2"
                            showPagination={true}
                        /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials


const HomesCraftedData = [
    {
        SwiperHref: "",
        SwiperImage: "/assets/images/becomeanhost/transparency/1.jpg",
        ImageWidth: "2948",
        ImageHeight: "2948",
        SwiperHeading: "Villa Serene Cove",
        SwiperDescription: "Calangute, Goa"
    },
    {
        SwiperHref: "",
        SwiperImage: "/assets/images/becomeanhost/transparency/2.jpg",
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