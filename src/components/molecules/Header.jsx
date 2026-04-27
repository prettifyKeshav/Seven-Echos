"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`${isFixed ? "header-fixed" : ""}`}>
            <div className="container-fluid header-wrapper">
                <div className="colA">
                    <Link href="/" className="logo">
                        <Image src="/assets/logo.svg" width={80} height={77} alt="logo"></Image>
                    </Link>
                </div>
                <div className="colB">
                    <ul>
                        <li>
                            <Link href="/about-us" >Company</Link>
                        </li>
                        <li>
                            <Link href="/" >Goa Travel Guide</Link>
                        </li>
                        <li>
                            <Link href="/" >List Your Property</Link>
                        </li>
                        <li>
                            <Link href="/" >Our journal</Link>
                        </li>
                    </ul>
                </div>

                <div className="colC">
                    <button className="btn">Get in Touch</button>
                </div>
            </div>
        </header>
    )
}

export default Header