import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomSwiper from '@/components/organisms/CustomSwiper'
import SimilarProperties from './SimilarProperties'
import { reviewsData } from '@/data/ProductDetails/ProductDetails'
import { policiyData } from '@/data/ProductDetails/ProductDetails'
import { popularThingsCardData } from '@/data/ProductDetails/ProductDetails'
import FaqSection from './FaqSection'
import BookingSummary from './BookingSummary'
import Motion from '@/components/organisms/Animate'

const DetailSec = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "location", label: "Location" },
        { id: "most-popular-things", label: "Most Popular Things" },
        { id: "similar-properties", label: "Similar Properties" },
        { id: "policy", label: "Policy" },
        { id: "reviews", label: "Reviews" },
        { id: "faq", label: "Faq" },
    ];
    return (
        <>
            <section>
                <div className="project-detail-secB">
                    <div className="container">
                        <ul className="tab">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.id}
                                    className={activeTab === tab.id ? "active" : ""}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <Link href={`#${tab.id}`}>
                                        {tab.label}
                                    </Link>
                                </li>
                            ))}
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

            <section id='overview'>
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
                                <BookingSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='location'>
                <div className="project-detail-secD">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Location</h2>
                            </div>
                        </Motion>
                        <div className="map-wrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984956.6950072359!2d73.3468839683708!3d15.35008451542367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1778670042548!5m2!1sen!2sin" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <Motion variant='fadeUp'>
                            <div className="flex-box">
                                <div className="flex-box-item">
                                    <ul>
                                        <li className='active'>
                                            <figure>
                                                <Image src="/assets/icon/Amenities/restaurant.svg" width={25} height={25} alt='ico' ></Image>
                                            </figure>
                                            Restaurant & Cafe
                                        </li>

                                        <li>
                                            <Image src="/assets/icon/location.svg" width={25} height={25} alt='ico' ></Image>
                                            Tourist Attraction
                                        </li>

                                        <li>
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
                        </Motion>
                    </div>
                </div>
            </section >

            <section id='most-popular-things'>
                <div className="project-detail-secE">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>12 Most Popular Things to Do Nearby</h2>
                            </div>
                            <CustomSwiper
                                data={popularThingsCardData}
                                spaceBetween="20"
                                speed="800"
                                slidesPerView="4"
                                swiperSlideCard="PopularThingsCard"
                                showPagination={false}
                                navigation={true}
                                swiperNavClass="center-full-full"
                            />
                        </Motion>
                    </div>
                </div>
            </section>

            <section id='similar-properties'>
                <div className="project-detail-secF">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Similar Properties</h2>
                            </div>
                            <SimilarProperties />
                        </Motion>
                    </div>
                </div>
            </section >

            <section id='policy'>
                <div className="project-detail-secG">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Policies</h2>
                                <p>Lazur Hotel Apartments takes special requests - add in the next step!</p>
                            </div>

                            <div className="property-table-card">
                                <table>
                                    <tbody>
                                        {
                                            policiyData.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td className="icon-cell">
                                                            <Image src={item.icon} width={25} height={25} alt={item.title} />
                                                        </td>
                                                        <td>{item.title}</td>
                                                        <td>{item.description}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </Motion>
                    </div>
                </div>
            </section>

            <section id='reviews'>
                <div className="project-detail-secH" >
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Reviews</h2>
                            </div>
                            <div className="overall-badge">
                                <span className="score">5.0</span>
                                <span className="label">Excellent</span>
                                <span className="count">1,269 reviews</span>
                            </div>
                        </Motion>

                        <Motion variant='fadeUp'>
                            <div className="flex-box">
                                <div className="ratings-grid">
                                    <div className="bar-chart">
                                        <div className="bar-row">
                                            <span className="bar-num">5</span>
                                            <div className="bar-track">
                                                <div className="bar-fill" style={{ width: "90" }}></div>
                                            </div>
                                        </div>
                                        <div className="bar-row">
                                            <span className="bar-num">4</span>
                                            <div className="bar-track">
                                                <div className="bar-fill" style={{ width: "6%" }}></div>
                                            </div>
                                        </div>
                                        <div className="bar-row">
                                            <span className="bar-num">3</span>
                                            <div className="bar-track">
                                                <div className="bar-fill" style={{ width: "2%" }}></div>
                                            </div>
                                        </div>
                                        <div className="bar-row">
                                            <span className="bar-num">2</span>
                                            <div className="bar-track">
                                                <div className="bar-fill" style={{ width: "1%" }}></div>
                                            </div>
                                        </div>
                                        <div className="bar-row">
                                            <span className="bar-num">1</span>
                                            <div className="bar-track">
                                                <div className="bar-fill" style={{ width: "1%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="category-scores">
                                    <div className="category-item">
                                        <div className="inner-flex">
                                            <Image src="/assets/images/project/detail/reviews-ico/home-star.svg" width={20} height={20} alt='ico'></Image>
                                            <p>Amenities</p>
                                        </div>
                                        <p className="cat-score">5.0</p>
                                    </div>

                                    <div className="category-item">
                                        <div className="inner-flex">
                                            <Image src="/assets/images/project/detail/reviews-ico/home-star.svg" width={20} height={20} alt='ico'></Image>
                                            <p>Cleanliness</p>
                                        </div>
                                        <p className="cat-score">5.0</p>
                                    </div>

                                    <div className="category-item">
                                        <div className="inner-flex">
                                            <Image src="/assets/images/project/detail/reviews-ico/home-star.svg" width={20} height={20} alt='ico'></Image>
                                            <p>Communication</p>
                                        </div>
                                        <p className="cat-score">5.0</p>
                                    </div>

                                    <div className="category-item">
                                        <div className="inner-flex">
                                            <Image src="/assets/images/project/detail/reviews-ico/home-star.svg" width={20} height={20} alt='ico'></Image>
                                            <p>Location</p>
                                        </div>
                                        <p className="cat-score">5.0</p>
                                    </div>

                                    <div className="category-item">
                                        <div className="inner-flex">
                                            <Image src="/assets/images/project/detail/reviews-ico/home-star.svg" width={20} height={20} alt='ico'></Image>
                                            <p>Value</p>
                                        </div>
                                        <p className="cat-score">5.0</p>
                                    </div>
                                </div>
                            </div>
                        </Motion>

                        <Motion variant='fadeUp'>
                            <div className="reviews-cards">
                                {reviewsData.map((item, index) => (
                                    <div className="review-card" key={index}>
                                        <div className="review-header">
                                            <div className="reviewer-info">
                                                <figure>
                                                    <Image
                                                        src={item.reviewerImage}
                                                        width={38}
                                                        height={38}
                                                        alt={item.reviewerName}
                                                    />
                                                </figure>

                                                <div>
                                                    <h5 className="reviewer-name">{item.reviewerName}</h5>
                                                    <p className="review-date">{item.reviewDate}</p>
                                                </div>
                                            </div>

                                            <span className="review-score">{item.reviewScore}</span>
                                        </div>

                                        <p className="review-text">{item.reviewText}</p>

                                        <button type='button' className="show-more">Show More</button>
                                    </div>
                                ))}
                            </div>
                        </Motion>
                    </div>
                </div>
            </section>

            <section id='faq'>
                <div className="project-detail-secI">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <FaqSection />
                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailSec