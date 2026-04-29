import React from 'react'
import CustomInput from '@/components/atom/CustomInput'
import Image from 'next/image'

const HeroFormSec = () => {
    return (
        <>
            <h3>Tell us more about your home</h3>
            <form action="">
                <div className="form-wrapper">
                    <CustomInput formLabel="First Name*" inputType="text" placeholder="John" />
                    <CustomInput formLabel="Last Name*" inputType="text" placeholder="smith" />
                    <CustomInput formLabel="Email Id*" inputType="email" placeholder="abc@example.com" isFull />
                    <CustomInput formLabel="Contact Number*" inputType="tel" placeholder="91+0000000000" />
                    <CustomInput formLabel="Website / Social Media link (if any)" inputType="text" placeholder="www.example.com" isFull />
                    <div className="form-group full">
                        <label htmlFor="">Upload images of property</label>
                        <div className="file-wrapper">
                            <figure>
                                <Image src="/assets/icon/upload.svg" width={40} height={40} alt="ico"></Image>
                            </figure>
                            <p>Click here to select files</p>
                            
                            <input type="file" className='file-input' placeholder="Click here to select files" />
                        </div>
                    </div>
                </div>
                <button type='button' className='btn'>Submit</button>
            </form>
        </>
    )
}

export default HeroFormSec