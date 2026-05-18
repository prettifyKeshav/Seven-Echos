'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import CustomSelect from '../atom/CustomSelect'

const AddOnServiceCard = ({ i, ...item }) => {
    const [selectedProperty, setSelectedProperty] = useState("")
    return (
        <>
            <div className="add-on-service-card" key={i}>
                <figure>
                    <Image src={item.figureImage} width={284} height={284} alt="ico" ></Image>
                </figure>
                <figcaption>
                    <h4>{item.title}</h4>
                    <CustomSelect
                        placeholder="No. of People"
                        value={selectedProperty}
                        onChange={(val) => setSelectedProperty(val)}
                        options={item.options}
                    />
                </figcaption>
            </div>
        </>
    )

}

export default AddOnServiceCard
