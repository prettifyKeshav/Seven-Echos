"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const ChangePassword = () => {
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

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="change-password">
            <h1 className="viewHeader">Change Password</h1>
            <form>
                <div className="form form-grid">

                    {/* Current Password */}
                    <div className="form-group">
                        <input type={showCurrent ? "text" : "password"} className="form-control" />
                        <label>Current Password</label>
                        <span onClick={() => setShowCurrent(!showCurrent)}>
                            <Image src={showCurrent ? "/assets/icon/password-show.svg" : "/assets/icon/password-hide.svg"} height={16} width={16} alt="toggle password" />
                        </span>
                    </div>

                    {/* New Password */}
                    <div className="form-group">
                        <input type={showNew ? "text" : "password"} className="form-control" />
                        <label>New Password</label>
                        <span onClick={() => setShowNew(!showNew)}>
                            <Image src={showNew ? "/assets/icon/password-show.svg" : "/assets/icon/password-hide.svg"} height={16} width={16} alt="toggle password" />
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="form-group">
                        <input type={showConfirm ? "text" : "password"} className="form-control" />
                        <label>Confirm Password</label>
                        <span onClick={() => setShowConfirm(!showConfirm)}>
                            <Image src={showConfirm ? "/assets/icon/password-show.svg" : "/assets/icon/password-hide.svg"} height={16} width={16} alt="toggle password" />
                        </span>
                    </div>

                    <button className="btn custom-name full">Update Password</button>
                </div>
            </form>

        </div>
    );
}

export default ChangePassword