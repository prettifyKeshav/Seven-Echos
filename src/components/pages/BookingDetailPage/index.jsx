"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import "@/uploads/styles/booking-detail/booking-detail.css"
import "@/uploads/styles/component/component.css"
import Image from 'next/image'
import CustomInput from '@/components/atom/CustomInput'
import Motion from '@/components/organisms/Animate'
import CustomSwiper from '@/components/organisms/CustomSwiper'
import { AddOnServiceCardData, policiyData } from '@/data/BookingDetail/BookingDetailData'
import { useHeaderFixed } from '@/context/useHeaderContext'
import FilterSec from '@/components/organisms/FilterSec'



const BookingDetailPage = () => {
    const { setIsHeaderFixed, setIsWhiteHeader } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
        setIsWhiteHeader(true)
    }, [])

    return (
        <>

            <FilterSec />

            <section>
                <div className="booking-detail-secA">
                    <div className="container">

                        <ul className="breadcrumb">
                            <li><Link href="/">Home</Link></li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path d="M0 0h48v48H0z" fill="none" />
                                    <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </span>
                            <li><Link href="/">Villas</Link></li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path d="M0 0h48v48H0z" fill="none" />
                                    <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </span>
                            <li><Link href="/" >Villa Arts</Link></li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path d="M0 0h48v48H0z" fill="none" />
                                    <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </span>
                            <li><Link href="/" className="active">Review booking</Link></li>
                        </ul>

                        <div className="flex-box">
                            <div className="col">
                                <div className="group">
                                    <div className="heading">
                                        <h2>Booking details</h2>
                                    </div>
                                    <h4>Your trip</h4>
                                    <div className="inner-flex">
                                        <div className="lef">
                                            <h5>Dates</h5>
                                            <p>Jul 10-14</p>
                                        </div>
                                        <Link href="/">Edit</Link>
                                    </div>

                                    <div className="inner-flex">
                                        <div className="lef">
                                            <h5>Guests</h5>
                                            <p>2 guest</p>
                                        </div>
                                        <Link href="/">Edit</Link>
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="heading">
                                        <h2>Guest Info</h2>
                                        <p>Guest names must match the valid ID which will be used at check-in.</p>
                                    </div>
                                    <div className="gust-flex">
                                        <h4>Guest 1</h4>

                                        <div className="rig">
                                            <Link href="/">
                                                <span>
                                                    <Image src="/assets/images/booking-detail/plus-ico.svg" width={20} height={20} alt="ico"></Image>
                                                </span>
                                                Edit
                                            </Link>

                                            <Link href="/">
                                                <span>
                                                    <Image src="/assets/images/booking-detail/edit-ico.svg" width={20} height={20} alt="ico"></Image>
                                                </span>
                                                Add New Guest (Optinal)
                                            </Link>
                                        </div>
                                    </div>

                                    <form action="">
                                        <div className="form-wrapper">
                                            <CustomInput formLabel="First Name*" inputType="text" placeholder="John" />
                                            <CustomInput formLabel="Last Name*" inputType="text" placeholder="smith" />
                                            <CustomInput formLabel="Email Id*" inputType="email" placeholder="abc@example.com" />
                                            <CustomInput formLabel="Contact Number*" inputType="tel" placeholder="91+0000000000" />
                                        </div>
                                    </form>
                                </div>

                                <div className="group">
                                    <div className="heading">
                                        <h2>Special Requests (optional)</h2>
                                        <p>The property will do its best, but cannot guarantee to fulfil all requests</p>
                                    </div>
                                    <form action="">
                                        <div className="form-wrapper">
                                            <CustomInput inputType="text" placeholder="Let the property know if there's anything they can assist you with." isFull />
                                        </div>
                                    </form>
                                </div>

                                <div className="bottom-sec-group">
                                    <div className="group">
                                        <h5>Required for your trip</h5>
                                        <form action="">
                                            <div className="form-wrapper">
                                                <CustomInput formLabel="Phone number" inputType="tel" placeholder="Add and confirm our phone number to get trip update" isFull />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="group">
                                        <h5>Cancellation policy</h5>
                                        <p><strong>Free cancellation before Aug 1.</strong> cancel before check-in on Jul 10 for a partial refund. </p>
                                        <Link href="">Learn more</Link>
                                    </div>
                                </div>

                            </div>

                            <div className="col">
                                <div className="hotel-info">
                                    <Image src="/assets/images/booking-detail/villa-arts.jpg" width={100} height={100} alt="Villa Arts" ></Image>

                                    <div className="hotel-content">
                                        <div className="hotel-title">
                                            <h3>Villa Arts</h3>

                                            <div className="stars">
                                                ★ ★ ★ ★ ★
                                            </div>
                                        </div>

                                        <p className="location">Assago, Goa</p>

                                        <div className="rating">
                                            <span className="score">5.0</span>
                                            <span className="excellent">Excellent</span>
                                            <span className="reviews">1,260 reviews</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking-details">
                                    <div className="dates">
                                        <div className="date-box">
                                            <div className="label">
                                                <Image src="/assets/icon/calendar.svg" width={20} height={20} alt='calendar' ></Image>
                                                <span>Check-in</span>
                                            </div>
                                            <h4>08/14/2025</h4>
                                        </div>

                                        <div className="divider"></div>

                                        <div className="date-box">
                                            <div className="label">
                                                <Image src="/assets/icon/calendar.svg" width={20} height={20} alt='calendar' ></Image>
                                                <span>Check-out</span>
                                            </div>
                                            <h4>08/19/2025</h4>
                                        </div>
                                    </div>

                                    <div className="guests">
                                        <h4>Rooms and Guests</h4>
                                        <p>1 rooms, 2 adults</p>
                                    </div>
                                </div>

                                <div className="price-section">
                                    <h4>Price details:</h4>

                                    <div className="price-row">
                                        <span>₹5000 x 5 nights</span>
                                        <span>₹ 25000</span>
                                    </div>

                                    <div className="price-row discount">
                                        <span>Coupon Discount</span>
                                        <span>-₹5000</span>
                                    </div>

                                    <p className="coupon">Coupon - “Welcome10”</p>

                                    <div className="price-row">
                                        <span>GST</span>
                                        <span>₹ 2,000</span>
                                    </div>

                                    <div className="total-row">
                                        <div>
                                            <h3>Total INR</h3>
                                            <small>Includes Taxes and platform fee</small>
                                        </div>

                                        <h2>₹ 22,000</h2>
                                    </div>
                                </div>

                                <button className="pay-btn">
                                    Proceed to pay ₹22,000
                                </button>

                                <p className="terms">
                                    By proceeding you agree to our <a href="#"> privacy policy </a> and <a href="#"> T&C </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="booking-detail-secB">
                    <div className="container">
                        <div className="heading">
                            <h2>Add on Service</h2>
                        </div>
                        <CustomSwiper
                            data={AddOnServiceCardData}
                            spaceBetween="10"
                            speed="800"
                            slidesPerView="4"
                            swiperSlideCard="AddOnServiceCard"
                            showPagination={false}
                            navigation={true}
                        />

                    </div>
                </div>
            </section>

            <section>
                <div className="booking-detail-secC">
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
        </>
    )
}

export default BookingDetailPage