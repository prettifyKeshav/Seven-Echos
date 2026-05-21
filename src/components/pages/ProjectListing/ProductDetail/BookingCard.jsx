import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";



const BookingCard = () => {
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [range, setRange] = useState();
    const checkIn = range?.from;
    const checkOut = range?.to;

    const [isGuestOpen, setIsGuestOpen] = useState(false);

    const [guests, setGuests] = useState({
        rooms: 1,
        adults: 1,
        children: 0,
    });

    const changeGuests = (type, value) => {
        setGuests((prev) => ({
            ...prev,
            [type]: Math.max(
                type === "children" ? 0 : 1,
                prev[type] + value
            ),
        }));
    };
    const totalGuests = guests.adults + guests.children;

    return (
        <>
            <div className="col">

                <div className="booking-details">
                    <div className="dates" onClick={() => setIsDateOpen(!isDateOpen)}>
                        <div className="date-box">
                            <div className="label">
                                <Image
                                    src="/assets/icon/calendar.svg"
                                    width={20}
                                    height={20}
                                    alt="calendar"
                                />
                                <span>Check-in</span>
                            </div>

                            <h4 className="check-in-date">
                                {checkIn ? format(checkIn, "d/MM/yyyy") : "00/00/0000"}
                            </h4>
                        </div>

                        <div className="divider"></div>

                        <div className="date-box">
                            <div className="label">
                                <Image
                                    src="/assets/icon/calendar.svg"
                                    width={20}
                                    height={20}
                                    alt="calendar"
                                />
                                <span>Check-out</span>
                            </div>

                            <h4 className="check-out-date">
                                {checkOut ? format(checkOut, "d/MM/yyyy") : "00/00/0000"}
                            </h4>
                        </div>
                    </div>

                    <div className="guest-info" onClick={() => setIsGuestOpen(!isGuestOpen)}>
                        <h4>Room and Guests</h4>
                        <p>
                            {guests.rooms} Room{guests.rooms > 1 ? "s" : ""},{" "}
                            {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
                        </p>
                    </div>
                </div>

                <div className="promo-code">
                    <input type="text" placeholder='Enter Promo Code' />
                </div>

                <Link href="/" className="coupons">
                    <figure>
                        <Image src="/assets/icon/coupon.svg" width={20} height={20} alt='coupon' ></Image>
                    </figure>
                    <h4>View Coupons</h4>
                </Link>

                <div className="badge">
                    <p>Full meal included</p>
                    <Link href="/">
                        <Image src="/assets/icon/cross-ico.svg" width={20} height={20} alt='ico'></Image>
                    </Link>
                </div>

                <div className="cancellation">
                    <Image src="/assets/icon/cancellation.svg" width={20} height={20} alt='cancellation'></Image>
                    <p>For cancellation and Refund Policy,
                        <Link href="/" >Click Here</Link>
                    </p>
                </div>

                <div className="total-price">
                    <div className='tot'>
                        <span className="totalLabel">Total:</span>
                        <button className="seeDetails">See Details</button>
                    </div>
                    <div className="totalPrice">
                        ₹25,000 <span className="taxNote">(Incl. taxes)</span>
                    </div>
                </div>

                <Link href="/booking-detail" className="pay-btn">Book Now</Link>
                <button className="contact-btn">
                    <Image src="/assets/icon/call.svg" width={20} height={20} alt='ico'></Image>
                    Connect With Your Host</button>


                {isDateOpen && (
                    <div className="date-dropdown" onClick={(e) => e.stopPropagation()}>
                        <DayPicker
                            mode="range"
                            selected={range}
                            onSelect={setRange}
                            numberOfMonths={2}
                            disabled={{
                                before: new Date()
                            }}
                        />
                        <div className="date-footer">
                            <span>
                                {checkIn && checkOut
                                    ? `${format(checkIn, "MMM d yyyy")} - ${format(checkOut, "MMM d yyyy")}`
                                    : "Select stay dates"
                                }
                            </span>
                            <div>
                                <button onClick={() => { setRange(undefined) }} >
                                    Clear
                                </button>
                                <button onClick={() => { setIsDateOpen(false) }} >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {isGuestOpen && (
                    <div className="guests-dropdown" onClick={(e) => e.stopPropagation()} >
                        <div className="guest-row">
                            <span className="guest-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#1f2226"
                                        d="M3 11V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5h1v7h-2v-2H4v2H2v-7zm2 0h14V6H5zm1 3h4v-1H6zm8 0h4v-1h-4z"
                                    />
                                </svg>
                            </span>

                            <div className="guest-info">
                                <p className="label">Rooms</p>
                                <p className="sublabel"> Select rooms </p>
                            </div>

                            <div className="counter">
                                <button className="btn" onClick={() => changeGuests("rooms", -1)} > − </button>

                                <span className="count-val">
                                    {guests.rooms}
                                </span>

                                <button className="btn" onClick={() => changeGuests("rooms", 1)} > + </button>
                            </div>
                        </div>
                        <div className="guest-row">
                            <span className="guest-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="#1f2226" d="M12 2a5 5 0 1 0 0 10a5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1" />
                                </svg>
                            </span>
                            <div className="guest-info">
                                <p className="label">Adults</p>
                                <p className="sublabel">
                                    13 years & above
                                </p>
                            </div>
                            <div className="counter">
                                <button className="btn" onClick={() => changeGuests("adults", -1)} > − </button>
                                <span className="count-val">
                                    {guests.adults}
                                </span>
                                <button className="btn" onClick={() => changeGuests("adults", 1)} > + </button>
                            </div>
                        </div>
                        <div className="guest-row">
                            <span className="guest-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512">
                                    <path d="M0 0h640v512H0z" fill="none" />
                                    <path fill="#1f2226" d="M160 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128M88 480v-80H70.2c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4l-28.6 37.8c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.6-37.8l31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32M480 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.1 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9l51.7 82.2c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-13-20.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z" />
                                </svg>
                            </span>

                            <div className="guest-info">
                                <p className="label">Children</p>
                                <p className="sublabel">
                                    Below 12 years
                                </p>
                            </div>

                            <div className="counter">
                                <button className="btn" onClick={() => changeGuests("children", -1)}> − </button>
                                <span className="count-val">
                                    {guests.children}
                                </span>
                                <button className="btn" onClick={() => changeGuests("children", 1)}>+</button>
                            </div>
                        </div>
                    </div>
                )}

                {isDateOpen && (<div className="CitySearchdropdown-overlay" onClick={() => setIsDateOpen(false)} />)}
                {isGuestOpen && (<div className="CitySearchdropdown-overlay" onClick={() => setIsGuestOpen(false)} />)}
            </div>
        </>
    )
}

export default BookingCard