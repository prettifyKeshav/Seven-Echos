import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import PopularThingsCard from './PopularThingsCard'
import CustomSwiper from '@/components/organisms/CustomSwiper'
import SimilarProperties from './SimilarProperties'

const DetailSec = () => {
    return (
        <>
            <section>
                <div className="project-detail-secB">
                    <div className="container">
                        <ul className='tab'>
                            <li className='active'>Overview</li>
                            <li>About Home</li>
                            <li>Spaces</li>
                            <li>Experiences</li>
                            <li>Location</li>
                            <li>Policy</li>
                            <li>Reviews</li>
                        </ul>

                        <Link href="/" className='btn-borchure'>
                            <figure>
                                <Image src="/assets/icon/pdf-ico.svg" width={30} height={30} alt="ico" ></Image>
                            </figure>
                            Download Brochure
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="project-detail-secC">
                    <div className="container">
                        <div className="flex-box">
                            <div className="flex-box-item">
                                <div className="col">
                                    <div className="heading">
                                        <h2>Description</h2>
                                    </div>
                                    <p><b>Villa has 3</b> rooms , Arranged over 2 floors</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Odio eget at at nibh at. Nec senectus sagittis posuere elementum amet. Eget amet viverra tellus convallis a viverra facilisi condimentum ac. Pharetra nisi et amet interdum facilisis sollicitudin tellus vel eget.</p>
                                    <Link className='btn-border' href="/">Show More</Link>
                                </div>
                                <div className="col">
                                    <div className="heading">
                                        <h2>Amenities</h2>
                                    </div>
                                    <div className="grid-box">
                                        <div className="grid-box-item">
                                            <figure>
                                                <Image src="/assets/icon/Amenities/restaurant.svg" width={25} height={25} alt='ico' ></Image>
                                            </figure>
                                            <p>Restaurant</p>
                                        </div>
                                        <div className="grid-box-item">
                                            <figure>
                                                <Image src="/assets/icon/Amenities/bar.svg" width={25} height={25} alt='ico' ></Image>
                                            </figure>
                                            <p>Bar</p>
                                        </div>
                                        <div className="grid-box-item">
                                            <figure>
                                                <Image src="/assets/icon/Amenities/gym.svg" width={25} height={25} alt='ico' ></Image>
                                            </figure>
                                            <p>Gym</p>
                                        </div>
                                        <div className="grid-box-item">
                                            <figure>
                                                <Image src="/assets/icon/Amenities/pool.svg" width={25} height={25} alt='ico' ></Image>
                                            </figure>
                                            <p>Pool</p>
                                        </div>
                                        <div className="grid-box-item">
                                            <figure>
                                                <Image src="/assets/icon/Amenities/smoking.svg" width={25} height={25} alt='ico' ></Image>
                                            </figure>
                                            <p>Smoking Allowed</p>
                                        </div>
                                        <div className="grid-box-item">
                                            <figure>
                                                <Image src="/assets/icon/Amenities/spa.svg" width={25} height={25} alt='ico' ></Image>
                                            </figure>
                                            <p>Spa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-box-item">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="project-detail-secD">
                    <div className="container">
                        <div className="heading">
                            <h2>Location</h2>
                        </div>
                        <div className="map-wrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984956.6950072359!2d73.3468839683708!3d15.35008451542367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1778670042548!5m2!1sen!2sin" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="flex-box">
                            <div className="flex-box-item">
                                <ul>
                                    <li className='btn-border'>
                                        <figure>
                                            <Image src="/assets/icon/Amenities/restaurant.svg" width={25} height={25} alt='ico' ></Image>
                                        </figure>
                                        Restaurant & Cafe
                                    </li>

                                    <li className='btn-border'>
                                        <Image src="/assets/icon/location.svg" width={25} height={25} alt='ico' ></Image>
                                        Tourist Attraction
                                    </li>

                                    <li className='btn-border'>
                                        <Image src="/assets/icon/transport.svg" width={25} height={25} alt='ico' ></Image>
                                        Transport
                                    </li>
                                </ul>
                                <div className="card">

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="icon-cell">
                                                    <Image src="/assets/icon/Amenities/restaurant.svg" width={25} height={25} alt='ico' ></Image>
                                                </td>
                                                <td>Gunpowder</td>
                                                <td className="distance-cell">1.8 km</td>
                                            </tr>
                                            <tr>
                                                <td className="icon-cell">
                                                    <Image src="/assets/icon/Amenities/restaurant.svg" width={25} height={25} alt='ico' ></Image>
                                                </td>
                                                <td>Daina</td>
                                                <td className="distance-cell">2.2 km</td>
                                            </tr>
                                            <tr>
                                                <td className="icon-cell">
                                                    <Image src="/assets/icon/Amenities/restaurant.svg" width={25} height={25} alt='ico' ></Image>
                                                </td>
                                                <td>Rosberry</td>
                                                <td className="distance-cell">2.6 km</td>
                                            </tr>
                                            <tr>
                                                <td className="icon-cell">
                                                    <Image src="/assets/icon/Amenities/restaurant.svg" width={25} height={25} alt='ico' ></Image>
                                                </td>
                                                <td>Normche Cafe</td>
                                                <td className="distance-cell">3.5 km</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="flex-box-item">
                                <p>Lorem ipsum dolor sit amet consectetur. Proin mattis viverra habitant eget non. Duis pulvinar mauris hendrerit ac pulvinar. Diam rhoncus luctus orci non in. Purus tortor suspendisse neque malesuada. Commodo nisl a netus velit habitasse. In amet mattis morbi venenatis mi enim tempor. Vestibulum convallis elementum sed sem egestas neque faucibus. Nibh lectus ligula facilisi quis.</p>
                                <p>Et neque ridiculus scelerisque quis sagittis lacus elit duis risus. Aliquet aliquam vitae consequat facilisis nunc quisque. Viverra neque netus rhoncus lacus in ac. Pharetra placerat pharetra varius phasellus tincidunt magnis duis tincidunt orci. Mattis feugiat a phasellus pulvinar platea. Euismod quam imperdiet nulla morbi porta. Faucibus suspendisse etiam maecenas velit dui...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="project-detail-secE">
                    <div className="container">
                        <div className="heading">
                            <h2>12 Most Popular Things to Do Nearby</h2>

                            <CustomSwiper
                                data={PopularThingsCardData}
                                spaceBetween="20"
                                speed="800"
                                slidesPerView="4"
                                swiperSlideCard="PopularThingsCard"
                                showPagination={false}
                                navigation={true}
                                swiperNavClass="center-full-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="project-detail-secF">
                    <div className="container">
                        <div className="heading">
                            <h2>Similar Properties</h2>
                        </div>
                        <SimilarProperties />
                    </div>
                </div>
            </section >

        </>
    )
}

export default DetailSec

const PopularThingsCardData = [
    {
        figureImage: "/assets/images/project/detail/popular-things/1.jpg",
        heading: "Beach",
        thingsCategory: "Beach",
        distance: "600 m away",
    },
    {
        figureImage: "/assets/images/project/detail/popular-things/2.jpg",
        heading: "Flamenco Show",
        thingsCategory: "Beach",
        distance: "600 m away",
    },
    {
        figureImage: "/assets/images/project/detail/popular-things/3.jpg",
        heading: "Musica Tour",
        thingsCategory: "Beach",
        distance: "600 m away",
    },
    {
        figureImage: "/assets/images/project/detail/popular-things/4.jpg",
        heading: "Cafe",
        thingsCategory: "Beach",
        distance: "600 m away",
    },
    {
        figureImage: "/assets/images/project/detail/popular-things/1.jpg",
        heading: "Beach",
        thingsCategory: "Beach",
        distance: "600 m away",
    },
    {
        figureImage: "/assets/images/project/detail/popular-things/2.jpg",
        heading: "Flamenco Show",
        thingsCategory: "Beach",
        distance: "600 m away",
    },
    {
        figureImage: "/assets/images/project/detail/popular-things/3.jpg",
        heading: "Musica Tour",
        thingsCategory: "Beach",
        distance: "600 m away",
    },
    {
        figureImage: "/assets/images/project/detail/popular-things/4.jpg",
        heading: "Cafe",
        thingsCategory: "Beach",
        distance: "600 m away",
    }
]