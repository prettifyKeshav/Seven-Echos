"use client";

import Link from "next/link";
import Image from "next/image";
import AuthModal from "../organisms/AuthModal";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";
import { useHeaderFixed } from "@/context/useHeaderContext";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const { isHeaderFixed, isWhiteHeader } = useHeaderFixed(false);
    const [isLogin, setIsLogin] = useState(false);
    const { openModal } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${isFixed || isHeaderFixed ? "header-fixed" : ""} ${isWhiteHeader ? "white-header" : ""}`} >
                <div className="container-fluid header-wrapper">
                    <div className="colA">
                        <Link href="/" className="logo">
                            <Image
                                src={`${isWhiteHeader ? "/assets/prime-logo.svg" : "/assets/prime-logo.svg"}`}
                                width={80}
                                height={77}
                                alt="logo"
                            ></Image>
                        </Link>
                    </div>
                    <div className="colB">
                        <ul>
                            <li>
                                <Link href="/about-us">Company</Link>
                            </li>
                            <li className="has-dropdown">
                                <Link href="/" className="has-link">Travel Guides</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                                    <path d="M0 0h1024v1024H0z" fill="none" />
                                    <path fill="#000" d="M104.7 338.8a64 64 0 0 1 90.5 0L512 655.6l316.8-316.8a64 64 0 0 1 90.5 90.4l-362 362.1a64 64 0 0 1-90.5 0l-362.1-362a64 64 0 0 1 0-90.5" />
                                </svg>

                                <ul className="dropdown-menu">
                                    {travelGuide.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.titleLink} target="_blank">{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <Link href="/become-an-host">List Your Property</Link>
                            </li>
                            <li>
                                <Link href="/blogs">Our journal</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="colC">
                        <button className="btn btn-contact">
                            Get in Touch
                            <ul className="contact-options">
                                {contactOptions.map(({ title, icon, href }, index) => (
                                    <li key={index}>
                                        <a href={href}>
                                            <figure>
                                                <Image
                                                    src={icon}
                                                    width={24}
                                                    height={24}
                                                    alt={title}
                                                ></Image>
                                            </figure>
                                            {title}
                                        </a>
                                    </li>
                                ))}
                                <li onClick={() => openModal("enquire")}>
                                    <figure>
                                        <Image
                                            src="/assets/icon/share.svg"
                                            width={24}
                                            height={24}
                                            alt="share"
                                        ></Image>{" "}
                                    </figure>{" "}
                                    Make an enquiry
                                </li>
                            </ul>
                        </button>

                        {isLogin ? (
                            <div className="user-profile">
                                <figure>
                                    <Image
                                        src="/assets/images/profile/user.jpg"
                                        width={48}
                                        height={48}
                                        alt="user"
                                    ></Image>
                                </figure>
                                <ul className="user-menu">
                                    {userMenu.map(({ title, image }, index) => (
                                        <li key={index}>
                                            <a href="">
                                                <figure>
                                                    <Image
                                                        src={image}
                                                        width={24}
                                                        height={24}
                                                        alt={title}
                                                    ></Image>
                                                </figure>
                                                {title}
                                            </a>
                                        </li>
                                    ))}
                                    <li onClick={() => setIsLogin(false)}>
                                        <figure>
                                            <Image
                                                src="/assets/icon/logout.svg"
                                                width={24}
                                                height={24}
                                                alt="heart"
                                            ></Image>
                                        </figure>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <button
                                onClick={() => openModal("auth")}
                                className="btn-border btn-signin"
                            >
                                {" "}
                                Sign In{" "}
                            </button>
                        )}
                    </div>
                </div>
            </header >
            <AuthModal setIsLogin={setIsLogin} />
        </>
    );
};
export default Header;

const userMenu = [
    {
        title: "Sneha Somani",
        image: "/assets/images/profile/user.jpg",
    },
    { title: "My Profile", image: "/assets/icon/profile.svg" },
    { title: "Trips", image: "/assets/icon/car.svg" },
    { title: "Wishlist", image: "/assets/icon/heart.svg" },
];

const contactOptions = [
    {
        title: "+91 9593266777",
        icon: "/assets/icon/call.svg",
        href: "tel:+919593266777",
    },
    {
        title: "Whatsapp us",
        icon: "/assets/icon/wap.svg",
        href: "https://wa.me/+919593266777",
    },
];

const travelGuide = [
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
    { title: "Goa", titleLink: "/travel-guide" },
]