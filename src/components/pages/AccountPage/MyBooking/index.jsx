import React, { useState } from 'react';
import BookingCard from './BookingCard';

const MyBooking = () => {
    const [activeTab, setActiveTab] = useState("All");
    const filteredData =
        activeTab === "All"
            ? bookingData
            : bookingData.filter(
                item => item.status === activeTab
            );

    return (
        <>
            <div className="my-booking">

                <div className="booking-header">
                    <h1 className="viewHeader">My Booking</h1>
                </div>

                <div className="booking-tabs">
                    <button onClick={() => setActiveTab("All")} className={activeTab === "All" ? "active" : ""} > All Bookings </button>
                    <button onClick={() => setActiveTab("Confirmed")} className={activeTab === "Confirmed" ? "active" : ""} > Upcoming </button>
                    <button onClick={() => setActiveTab("Pending")} className={activeTab === "Pending" ? "active" : ""} > Completed </button>
                    <button onClick={() => setActiveTab("Cancelled")} className={activeTab === "Cancelled" ? "active" : ""} > Cancelled </button>
                </div>

                <div className="booking-list">
                    {
                        filteredData.map((item) => (
                            <BookingCard key={item.id} {...item} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default MyBooking;

const bookingData = [
    {
        id: 1,
        image: "/assets/images/project/detail/fancybox-img/1.jpg",
        title: "Villa Arts",
        location: "Goa, India",
        bookingId: "#SEV12564",
        checkIn: "24 May 2026",
        checkOut: "28 May 2026",
        guests: "4 Adults, 2 Children",
        amount: "₹25,000",
        status: "Confirmed"
    },

    {
        id: 2,
        image: "/assets/images/project/detail/fancybox-img/2.jpg",
        title: "Luxury Ocean Villa",
        location: "Goa, India",
        bookingId: "#SEV12565",
        checkIn: "10 Jun 2026",
        checkOut: "13 Jun 2026",
        guests: "2 Adults",
        amount: "₹18,000",
        status: "Pending"
    },

    {
        id: 3,
        image: "/assets/images/project/detail/fancybox-img/3.jpg",
        title: "Sunset Paradise Villa",
        location: "Goa, India",
        bookingId: "#SEV12566",
        checkIn: "05 Apr 2026",
        checkOut: "08 Apr 2026",
        guests: "2 Adults",
        amount: "₹15,000",
        status: "Cancelled"
    }
];
