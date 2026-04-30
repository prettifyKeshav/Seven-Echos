"use client"
import React, { useState, useRef, useEffect } from 'react'

const CustomSelect = ({
    label,
    options = [],
    isFull = false,
    value,
    onChange
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef()

    // close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    const selectedLabel = options.find(opt => opt.value === value)?.label

    return (
        <div className={`form-group ${isFull ? "full" : ""}`} ref={dropdownRef}>
            <label>{label}</label>

            {/* Selected box */}
            <div
                className="custom-select-box"
                onClick={() => setIsOpen(!isOpen)} >
                {selectedLabel || "Select"}
            </div>

            <ul className={`custom-select-list ${isOpen ? "open" : ""}`}>
                {options.map((item, index) => (
                    <li
                        key={index}
                        className={`option ${value === item.value ? "selected" : ""}`}
                        onClick={() => {
                            onChange(item.value)
                            setIsOpen(false)
                        }}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomSelect