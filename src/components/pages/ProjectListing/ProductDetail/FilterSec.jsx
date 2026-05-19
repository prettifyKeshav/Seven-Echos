import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const FilterSec = () => {
    const [isFilter, setIsFilter] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [query, setQuery] = useState("");
    const [selectedName, setSelectedName] = useState("");


    const [isDateOpen, setIsDateOpen] = useState(false);
    const [range, setRange] = useState();
    const checkIn = range?.from;
    const checkOut = range?.to;

    useEffect(() => {
        const handleScroll = () => {
            setIsFilter(window.scrollY > 120);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const destination = [
        // Indian States
        { name: "Andhra Pradesh" },
        { name: "Arunachal Pradesh" },
        { name: "Assam" },
        { name: "Bihar" },
        { name: "Chhattisgarh" },
        { name: "Goa" },
        { name: "Gujarat" },
        { name: "Haryana" },
        { name: "Himachal Pradesh" },
        { name: "Jharkhand" },
        { name: "Karnataka" },
        { name: "Kerala" },
        { name: "Madhya Pradesh" },
        { name: "Maharashtra" },
        { name: "Manipur" },
        { name: "Meghalaya" },
        { name: "Mizoram" },
        { name: "Nagaland" },
        { name: "Odisha" },
        { name: "Punjab" },
        { name: "Rajasthan" },
        { name: "Sikkim" },
        { name: "Tamil Nadu" },
        { name: "Telangana" },
        { name: "Tripura" },
        { name: "Uttar Pradesh" },
        { name: "Uttarakhand" },
        { name: "West Bengal" },

        // Union Territories
        { name: "Andaman and Nicobar Islands" },
        { name: "Chandigarh" },
        { name: "Dadra and Nagar Haveli and Daman and Diu" },
        { name: "Delhi" },
        { name: "Jammu and Kashmir" },
        { name: "Ladakh" },
        { name: "Lakshadweep" },
        { name: "Puducherry" },
    ];

    const filteredDestination = destination.filter(
        (item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (item) => {
        setSelectedName(item.name);
        setIsOpen(false);
        setQuery("");
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setQuery("");
    };

    return (
        <>
            <div className={`filter-wrapper ${isFilter ? "filter-wrapper-fixed" : ""}`}>
                <div className="flex-wrapper">
                    <div className="grid-box">
                        <div className="col" onClick={handleToggle}>
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="#1f2226" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <circle cx="12" cy="10" r="3" />
                                        <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                                    </g>
                                </svg>
                            </figure>
                            <p>{selectedName || "Where to next?"}</p>

                            <div className="city-search-dropdown">
                                {isOpen && (
                                    <div className="dropdown-menu">
                                        <input
                                            type="text"
                                            className="search-input"
                                            placeholder={`Where are you planning to stay?`}
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            autoFocus
                                        />
                                        <div className="suggestions-container">
                                            <div className="section">
                                                <h3 className="section-title">DESTINATION</h3>
                                                <ul className="suggestions-list">
                                                    {filteredDestination.map((item, index) => (
                                                        <li key={index} className="suggestion-item" onClick={() => handleSelect(item)}>
                                                            <div className="item-content">
                                                                <div className="item-main">
                                                                    <span className="item-name">{item.name}</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* {isOpen && (
                                    <div className="CitySearchdropdown-overlay" onClick={() => setIsOpen(false)} />
                                )} */}
                            </div>
                        </div>

                        <div className="col" onClick={() => setIsDateOpen(!isDateOpen)} >
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                                    <path d="M0 0h20v20H0z" fill="none" />
                                    <path fill="#1f2226" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z" />
                                </svg>
                            </figure>
                            <p>
                                {checkIn && checkOut
                                    ? `${format(checkIn, "MMM d")} - ${format(checkOut, "MMM d")}`
                                    : "Select Dates"}
                            </p>

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

                                            <button
                                                onClick={() => {
                                                    setRange(undefined)
                                                }}
                                            >
                                                Clear
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setIsDateOpen(false)
                                                }}
                                            >
                                                Apply
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            )}
                        </div>


                        <div className="col">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="#1f2226" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <circle cx="9" cy="7" r="4" />
                                    </g>
                                </svg>

                            </figure>
                            <p>Add Guests</p>
                        </div>
                    </div>
                    <button className='search-btn'>
                        Search
                        <Image src="/assets/icon/search.svg" width={20} height={20} alt='searchicon'></Image>
                    </button>
                </div>
            </div >
        </>
    )
}

export default FilterSec