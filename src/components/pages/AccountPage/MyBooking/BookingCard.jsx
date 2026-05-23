import React from 'react';
import Image from 'next/image';

const BookingCard = ({
    image,
    title,
    location,
    bookingId,
    checkIn,
    checkOut,
    guests,
    amount,
    status,
}) => {

    return (
        <div className="booking-card">

            <div className="booking-image">
                <Image
                    src={image}
                    width={220}
                    height={160}
                    alt={title}
                />
            </div>

            <div className="booking-content">
                <div className="booking-top">
                    <div>
                        <h3>{title}</h3>
                        <p className="booking-location">
                            <Image src="/assets/icon/location.svg" width={20} height={20} alt='ico' ></Image>
                            {location}
                        </p>
                        <span className="booking-id">
                            Booking ID : {bookingId}
                        </span>
                    </div>

                    <div className={`booking-status ${status.toLowerCase()}`} > {status} </div>

                </div>


                <div className="booking-details">

                    <div className="detail-box">
                        <span>
                            <Image src="/assets/icon/calendar.svg" width={20} height={20} alt='ico' ></Image>
                            Check In</span>
                        <p>{checkIn}</p>
                    </div>

                    <div className="detail-box">
                        <span>
                            <Image src="/assets/icon/calendar.svg" width={20} height={20} alt='ico' ></Image>
                            Check Out</span>
                        <p>{checkOut}</p>
                    </div>

                    <div className="detail-box">
                        <span>
                            <Image src="/assets/icon/user.svg" width={20} height={20} alt='ico' ></Image>
                            Guests</span>
                        <p>{guests}</p>
                    </div>

                    <div className="detail-box">
                        <span>₹ Amount Paid</span>
                        <p>{amount}</p>
                    </div>

                </div>

                <div className="booking-actions">

                    <button className="view-btn">
                        View Details
                    </button>

                    {
                        status === "Confirmed" &&
                        <button className="download-btn">
                            Download Invoice
                        </button>
                    }

                    {
                        status === "Pending" &&
                        <button className="cancel-btn">
                            Cancel Booking
                        </button>
                    }

                </div>

            </div>

        </div>
    )
}

export default BookingCard;