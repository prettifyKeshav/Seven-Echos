import React, { useState } from 'react'
import { Range, getTrackBackground } from "react-range";

import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import CustomSelect from '@/components/atom/CustomSelect';

const ListingFilters = () => {
    const [selectedBedrooms, setSelectedBedrooms] = useState("")
    const [selectedBathrooms, setSelectedBathrooms] = useState("")
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // const [activeDropdown, setActiveDropdown] = useState(null);


    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedName, setSelectedName] = useState("");
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [range, setRange] = useState();
    const checkIn = range?.from;
    const checkOut = range?.to;

    const MIN = 0;
    const MAX = 10000;
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [isPriceChanged, setIsPriceChanged] = useState(false);

    const [isRangeOpen, setIsRangeOpen] = useState(false)

    const [isGuestOpen, setIsGuestOpen] = useState(false);
    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
    });
    const changeGuests = (type, value) => {
        setGuests((prev) => ({
            ...prev,
            [type]: Math.max(
                type === "adults" ? 1 : 0,
                prev[type] + value
            ),
        }));
    };
    const totalGuests = guests.adults + guests.children;

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
            <div className={`listing-filter-wrapper filter-wrapper-fixed ${isMobileFilterOpen ? 'is-mobile-open' : ''}`}>
                <div className="mobile-filter-trigger" onClick={() => setIsMobileFilterOpen((prev) => !prev)}>
                    <div className="trigger-content">
                        <figure className="filter-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                <path fill="none" stroke="#1f2226" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M7 12h10M10 18h4" />
                            </svg>
                        </figure>
                        <span>{isMobileFilterOpen ? "Close Filter" : "Filter"}</span>
                    </div>
                </div>

                <div className={`flex-wrapper ${isMobileFilterOpen ? 'mobile-visible' : ''}`}>
                    <div className="mobile-filter-header">
                        <span className="mobile-filter-title">Filters</span>
                        <button type="button" className="mobile-close-btn" onClick={() => setIsMobileFilterOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
                            </svg>
                            <span>Close</span>
                        </button>
                    </div>
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

                            {isOpen && (
                                <div className="CitySearchdropdown-overlay" onClick={() => setIsOpen(false)} />
                            )}
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

                        {isDateOpen && (
                            <div className="CitySearchdropdown-overlay" onClick={() => setIsDateOpen(false)} />
                        )}
                    </div>

                    <div className="col" onClick={() => setIsGuestOpen(!isGuestOpen)}>
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g
                                    fill="none"
                                    stroke="#1f2226"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <circle cx="9" cy="7" r="4" />
                                </g>
                            </svg>
                        </figure>

                        <p>{totalGuests} Guests</p>

                        {isGuestOpen && (
                            <div className="guests-dropdown" onClick={(e) => e.stopPropagation()} >
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

                        {isGuestOpen && (
                            <div
                                className="CitySearchdropdown-overlay"
                                onClick={() => setIsGuestOpen(false)}
                            />
                        )}
                    </div>

                    <div className="col" >
                        <CustomSelect
                            placeholder="Bedrooms"
                            value={selectedBedrooms}
                            onChange={(val) => setSelectedBedrooms(val)}
                            options={[
                                { label: "1", value: "1" },
                                { label: "2", value: "2" },
                                { label: "3", value: "3" },
                                { label: "4", value: "4" },
                                { label: "5", value: "5" },
                                { label: "6", value: "6" },
                                { label: "7", value: "7" },
                            ]}
                        />

                    </div>

                    <div className="col">
                        <CustomSelect
                            placeholder="Bathrooms"
                            value={selectedBathrooms}
                            onChange={(val) => setSelectedBathrooms(val)}
                            options={[
                                { label: "1", value: "1" },
                                { label: "2", value: "2" },
                                { label: "3", value: "3" },
                                { label: "4", value: "4" },
                                { label: "5", value: "5" },
                                { label: "6", value: "6" },
                                { label: "7", value: "7" },
                            ]}
                        />
                    </div>

                    <div className="col" onClick={() => setIsRangeOpen(prev => !prev)} >
                        <p> {isPriceChanged ? `₹${priceRange[0]} - ₹${priceRange[1]}` : "Price"}</p>
                        <div className={`flight-price-range ${isRangeOpen ? "is-open" : " "}`}>
                            <div className="flight-range-slider-range">
                                <Range
                                    step={100}
                                    min={MIN}
                                    max={MAX}
                                    values={priceRange}
                                    onChange={(values) => {
                                        setPriceRange(values);
                                        setIsPriceChanged(true);
                                    }}
                                    renderTrack={({ props, children }) => {
                                        const { key, ...rest } = props;

                                        return (
                                            <div
                                                key={key}
                                                onMouseDown={rest.onMouseDown}
                                                onTouchStart={rest.onTouchStart}
                                                style={{
                                                    ...rest.style,
                                                    height: "36px",
                                                    display: "flex",
                                                    width: "100%",
                                                }}
                                            >
                                                <div
                                                    ref={rest.ref}
                                                    style={{
                                                        height: "4px",
                                                        width: "100%",
                                                        borderRadius: "5px",
                                                        alignSelf: "center",
                                                        background: getTrackBackground({
                                                            values: priceRange,
                                                            colors: ["#ddd", "#faa935", "#ddd"],
                                                            min: MIN,
                                                            max: MAX,
                                                        }),
                                                    }}
                                                >
                                                    {children}
                                                </div>
                                            </div>
                                        );
                                    }}
                                    renderThumb={({ props }) => {
                                        const { key, ...rest } = props;

                                        return (
                                            <div
                                                key={key}
                                                {...rest}
                                                style={{
                                                    ...rest.style,
                                                    height: "20px",
                                                    width: "20px",
                                                    backgroundColor: "#faa935",
                                                    borderRadius: "50%",
                                                    outline: "none",
                                                    boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                                                }}
                                            />
                                        );
                                    }}
                                />
                            </div>

                            <div className="price-range-input-wrap">
                                <div className="price-range-input">
                                    <span>&#8377;</span>
                                    {priceRange[0]}
                                </div>

                                <div className="price-range-input">
                                    <span>&#8377;</span>
                                    {priceRange[1]}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ListingFilters