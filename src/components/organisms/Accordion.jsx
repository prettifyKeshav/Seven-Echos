'use client'
import Image from 'next/image'

import React, { useState, useRef, useEffect } from 'react'

const AccordionItem = ({ item, isOpen, onToggle }) => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])

    return (
        <div className={`accordian-wrapper ${isOpen ? 'open' : ''}`}>
            <div className="title" onClick={onToggle}>
                <h4>{item.mainTitle}</h4>
                <div className="ico">
                    <Image src="/assets/icon/plus-icon.svg" width={33} height={33} alt="ico" ></Image>
                </div>
            </div>
            <div
                className="description"
                ref={contentRef}
                style={{
                    height: `${height}px`,
                    overflow: 'hidden',
                    transition: 'height 0.35s ease',
                }}
            >
                <p>{item.paragraph}</p>
            </div>
        </div>
    )
}

const Accordion = ({ data = [], allowMultiple = false }) => {
    const [openIndexes, setOpenIndexes] = useState([0])

    const handleToggle = (index) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            )
        } else {
            setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]))
        }
    }

    return (
        <>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </>
    )
}

export default Accordion