"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "@/uploads/styles/header/header.css"
import { useModal } from '@/hooks/useModal';
import { useSelector } from 'react-redux';

const HamburgerModel = () => {

    const { isModal } = useSelector((state) => state.modal)
    const { closeModal } = useModal();

    const menuItems = [
        { id: 1, title: "Company", href: "/about-us" },
        { id: 2, title: "Travel Guides", href: "/travel-guide", targetBlank: true },
        { id: 3, title: "List Your Property", href: "/become-an-host" },
        { id: 4, title: "Our journal", href: "/blogs" },
        { id: 5, title: "Privacy Policy", href: "/privacy-policy" },
        { id: 6, title: "Terms and Condition", href: "/terms-condition" },
        { id: 7, title: "FAQ’s", href: "/faq" },
        { id: 8, title: "Contact Us", href: "/contact-us" },
    ];

    return (
        <div className={`model ham-pop ${isModal === "hapPop" ? "is-open" : ""}`}>
            <button className="close" onClick={closeModal}>
                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="model-body">
                <div className="icon">
                    <Image src="/assets/ham-logo.png" width={130} height={60} className="svg" alt="icon" />
                </div>

                <nav>
                    <ul className="nav-list">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    onClick={closeModal}
                                    target={item.targetBlank ? "_blank" : "_self"}
                                    rel={item.targetBlank ? "noopener noreferrer" : undefined}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="bottom-list">
                    <div className="social-icons">
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <Image src="/assets/icon/twitter.svg" width={25} height={25} alt="Twitter" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <Image src="/assets/icon/facebook.svg" width={25} height={25} alt="Facebook" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <Image src="/assets/icon/instagram.svg" width={25} height={25} alt="Instagram" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                            <Image src="/assets/icon/linkedin.svg" width={25} height={25} alt="LinkedIn" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Whatsapp">
                            <Image src="/assets/icon/whatsapp.svg" width={25} height={25} alt="WhatsApp" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerModel;