"use client"

import React, { useEffect } from 'react'
import Image from 'next/image';

const MyProfile = () => {
    useEffect(() => {
        const inputBoxes = document.querySelectorAll('.form-control');
        const handleFocus = function () {
            this.closest('.form-group')?.classList.add('active');
            this.classList.add('valid');
        };

        const handleBlur = function () {
            const hasValue = this.value.trim() !== '';
            if (!hasValue) {
                this.closest('.form-group')?.classList.remove('active');
                this.classList.remove('valid');
            }
        };
        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('focus', handleFocus);
            inputBox.addEventListener('blur', handleBlur);
        });
        return () => {
            inputBoxes.forEach(inputBox => {
                inputBox.removeEventListener('focus', handleFocus);
                inputBox.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    return (
        <div className='my-profile'>
            <h1 className="viewHeader">My Profile</h1>

            <div className="flex-box">
                <figure>
                    <Image src="/assets/images/profile/user.jpg" width={73} height={73} alt="user image"></Image>
                </figure>
                <div className="cg-avtar">
                    <h3>Change Avatar</h3>
                    <p>JPG or PNG, Max Size 2 MB</p>
                </div>
                <button className="upload">
                    <span>Upload New</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#611BA7" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" /></svg>
                </button>

                <button className="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#BA0000" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
                </button>
            </div>

            <div className="form form-grid">
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">First Name</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Middle Name</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Last Name</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Email ID</label>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" />
                    <label htmlFor="">Phone No.</label>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" />
                    <label htmlFor="">WhatsApp No.</label>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Address Line 1</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Address Line 2</label>
                </div>


                <div className="grid-box full">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">City</label>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">State</label>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Postal Code</label>
                    </div>
                </div>

                <button className="btn custom-name full">update Profile</button>
            </div>

        </div>
    );
}

export default MyProfile