"use client"
import React, { useState } from 'react'
import CustomInput from '@/components/atom/CustomInput'
import Image from 'next/image'
import CustomSelect from '@/components/atom/CustomSelect'

const HeroFormSec = () => {

    const [fileName, setFilename] = useState("")
    const [selectedProperty, setSelectedProperty] = useState("")

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFilename(file.name)
        }
    }

    return (
        <>
            <h3>Tell us more about your home</h3>
            <form action="">
                <div className="form-wrapper">
                    <CustomInput formLabel="First Name*" inputType="text" placeholder="John" />
                    <CustomInput formLabel="Last Name*" inputType="text" placeholder="smith" />
                    <CustomInput formLabel="Email Id*" inputType="email" placeholder="abc@example.com" isFull />
                    <CustomInput formLabel="Contact Number*" inputType="tel" placeholder="91+0000000000" />
                    <CustomSelect
                        label="Type of Property*"
                        value={selectedProperty}
                        onChange={(val) => setSelectedProperty(val)}
                        options={[
                            { label: "Villa Serene Cove", value: "VillaSereneCove" },
                            { label: "The Palm Haven", value: "ThePalmHaven" },
                            { label: "Casa Blu Vista", value: "CasaBluVista" },
                            { label: "Azure Breeze Villa", value: "AzureBreezeVilla" },
                            { label: "Villa Solaria", value: "VillaSolaria" },
                            { label: "Moonstone Escape", value: "MoonstoneEscape" },
                            { label: "Villa Serene Cove", value: "VillaSereneCove" },
                            { label: "The Palm Haven", value: "ThePalmHaven" },
                            { label: "Casa Blu Vista", value: "CasaBluVista" },
                            { label: "Azure Breeze Villa", value: "AzureBreezeVilla" },
                            { label: "Villa Solaria", value: "VillaSolaria" },
                            { label: "Moonstone Escape", value: "MoonstoneEscape" },
                        ]}
                    />
                    <CustomInput formLabel="Website / Social Media link (if any)" inputType="text" placeholder="www.example.com" isFull />

                    <div className="form-group full">
                        <label>Upload images of property</label>
                        <div className="file-wrapper">
                            <figure>
                                <Image src="/assets/icon/upload.svg" width={40} height={40} alt="ico" />
                            </figure>

                            <p>{fileName || "Click here to select files"}</p>

                            <input type="file" className='file-input' onChange={handleFileChange} />
                        </div>
                    </div>
                </div>

                <button type='button' className='btn'>Submit</button>
            </form>
        </>
    )
}

export default HeroFormSec