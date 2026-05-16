'use client';
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { useModal } from '@/hooks/useModal';
import { useSelector } from 'react-redux';

const AuthModal = ({setIsLogin}) => {
    const [showOTP, setShowOTP] = useState(false);

    const {isModal} = useSelector((state) => state.modal)
    const {closeModal} = useModal();

    const moveNext = (e, index) => {
        const otpInputs = document.querySelectorAll(".otp-box input");
        const value = e.target.value;
        if (value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
        if (e.key === "Backspace" && index > 0) {
            otpInputs[index - 1].focus();
            otpInputs[index - 1].value = "";
        }
    };

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");
        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };
        const handleBlur = function () {
            if (!this.value.trim()) {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };
        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });
        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    const handleModelChange = () => {
        setShowOTP(true);
    };

    const handleBack = () => {
        setShowOTP(false);
    };

    return (
        <div className={`model login-pop ${isModal === "auth" ? "is-open" : ""}`}>
            <button className="close" type="button" onClick={closeModal}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <div className={`model-body ${showOTP ? "hide-model" : ""}`}>
                <div className="title">
                    <div className="icon">
                        <Image src="/assets/images/logo.svg" width="68" height="64" alt="Logo"></Image>
                    </div>
                    <h2>Login</h2>
                </div>
                <div className="form form-grid">
                    <div className="form-group">
                        <input type="text" name="text" className="form-control" />
                        <label htmlFor="text">Enter email  OR Phone no </label>
                        {/* <p className="verify">Invalid</p> */}
                    </div>

                    <div className="sbmt-btn-div">
                        <button type="button" className="btn secondary-btn" onClick={handleModelChange}>CONTINUE</button>
                    </div>
                </div>
                <div className="split-sec"><p>OR</p></div>
                <div className="btm-social-wrp">
                    <Link href="/" className="google-btn btn secondary-border">
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7919 8.24996H9.15023V10.525H14.5752C14.3002 13.7 11.6586 15.0583 9.15856 15.0583C5.96689 15.0583 3.16689 12.5416 3.16689 8.99996C3.16689 5.58329 5.83356 2.94163 9.16689 2.94163C11.7419 2.94163 13.2502 4.58329 13.2502 4.58329L14.8336 2.93329C14.8336 2.93329 12.8002 0.666626 9.08356 0.666626C4.35023 0.666626 0.691895 4.66663 0.691895 8.99996C0.691895 13.2083 4.13356 17.3333 9.20856 17.3333C13.6669 17.3333 16.9169 14.275 16.9169 9.75829C16.9169 8.79996 16.7919 8.24996 16.7919 8.24996Z" fill="#000"></path>
                        </svg>
                        Google
                    </Link>

                    <Link href="/" className="facebook-btn btn secondary-border">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.16683 10.25H8.25016L9.0835 6.91663H6.16683V5.24996C6.16683 4.39163 6.16683 3.58329 7.8335 3.58329H9.0835V0.783293C8.81183 0.747459 7.786 0.666626 6.70266 0.666626C4.44016 0.666626 2.8335 2.04746 2.8335 4.58329V6.91663H0.333496V10.25H2.8335V17.3333H6.16683V10.25Z" fill="#000"></path>
                        </svg>
                        Facebook
                    </Link>

                </div>
            </div>

            <div className={`model-body otp-model-body ${showOTP ? "" : "hide-model"}`}>

                <Link href="" className='back-btn' onClick={handleBack}>
                    <Image src="/assets/icon/back-btn.svg" width={9} height={16} alt="back btn"></Image>
                    <p>Back</p>
                </Link>

                <div className="title">
                    <h4>Please enter the OTP sent to</h4>
                    <p>9953750291</p>
                </div>
                <div className="form form-grid">
                    <div className="otp-box">
                        <input type="text" maxLength="1" onKeyUp={(e) => moveNext(e, 0)} />
                        <input type="text" maxLength="1" onKeyUp={(e) => moveNext(e, 1)} />
                        <input type="text" maxLength="1" onKeyUp={(e) => moveNext(e, 2)} />
                        <input type="text" maxLength="1" onKeyUp={(e) => moveNext(e, 3)} />
                    </div>

                    <div className="sbmt-btn-div">
                        <button onClick={() => {setIsLogin(true); closeModal(); }} type="button" className="btn secondary-btn">verify otp</button>
                    </div>
                </div>

                <div className="resend-otp">
                    <p>Not received your code? <Link href="">Resend code</Link> </p>
                </div>
            </div>
        </div>
    )
}
export default AuthModal