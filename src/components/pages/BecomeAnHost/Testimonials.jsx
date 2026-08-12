import Motion from '@/components/organisms/Animate'
import CustomSwiper from '@/components/organisms/CustomSwiper'
import React from 'react'

const Testimonials = () => {
    return (
        <>
            <section>
                <div className="BecomeAnHost-secB">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Transparency is key</h2>
                                <p>No hidden costs, no unexpected surprises our commitment to transparency truly sets us apart.</p>
                            </div>

                            <CustomSwiper
                                data={CardData}
                                swiperSlideCard="TestimonialsCard"
                                spaceBetween="20"
                                speed="800"
                                // slidesPerView="2"
                                breakpoints={{
                                    200: {
                                        slidesPerView: 1.1,
                                        spaceBetween: 20,
                                        speed: 700,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                    }
                                }}
                                swiperNavBtn=""
                                swiperNavClass=""
                                navigation={true}
                                showPagination={false}
                            />
                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials

const CardData = [
    {
        figureImg: "/assets/images/becomeanhost/transparency/1.jpg",
        userImg: "/assets/images/becomeanhost/transparency/user1.png",
        description: "The day I metSeven Echoes team, their professionalism, commitment & collaborative spirit left a positive impact, which encouraged me to work together. 5 months since I entered a partnership, together we've streamlined operations & built a convincing foundations to achieve key milestones in the future.",
        userName: "Vikas Arora",
        userLocation: "Ekant Villa, Goa"
    },
    {
        figureImg: "/assets/images/becomeanhost/transparency/2.jpg",
        userImg: "/assets/images/becomeanhost/transparency/user1.png",
        description: "The day I metSeven Echoes team, their professionalism, commitment & collaborative spirit left a positive impact, which encouraged me to work together. 5 months since I entered a partnership, together we've streamlined operations & built a convincing foundations to achieve key milestones in the future.",
        userName: "Vikas Arora",
        userLocation: "Ekant Villa, Goa"
    },
    {
        figureImg: "/assets/images/becomeanhost/transparency/1.jpg",
        userImg: "/assets/images/becomeanhost/transparency/user1.png",
        description: "The day I metSeven Echoes team, their professionalism, commitment & collaborative spirit left a positive impact, which encouraged me to work together. 5 months since I entered a partnership, together we've streamlined operations & built a convincing foundations to achieve key milestones in the future.",
        userName: "Vikas Arora",
        userLocation: "Ekant Villa, Goa"
    },
    {
        figureImg: "/assets/images/becomeanhost/transparency/2.jpg",
        userImg: "/assets/images/becomeanhost/transparency/user1.png",
        description: "The day I metSeven Echoes team, their professionalism, commitment & collaborative spirit left a positive impact, which encouraged me to work together. 5 months since I entered a partnership, together we've streamlined operations & built a convincing foundations to achieve key milestones in the future.",
        userName: "Vikas Arora",
        userLocation: "Ekant Villa, Goa"
    },
]
