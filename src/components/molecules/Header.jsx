"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useNotFound } from "@/context/useNotFoundContext";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const { isNotFound } = useNotFound();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [isFixed, setIsFixed] = useState(false);
  // const [isNotFound, setIsNotFound] = useState(false);
  // useEffect(() => {
  //     const handleScroll = () => {
  //         setIsFixed(window.scrollY > 50);
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     // check if not-found-banner exists
  //     const checkNotFound = () => {
  //         const el = document.querySelector(".not-found-banner");
  //         setIsNotFound(!!el);
  //     };
  //     checkNotFound();
  //     return () => {
  //         window.removeEventListener("scroll", handleScroll);
  //     };
  // }, []);

  return (
    <header className={`${isFixed || isNotFound ? "header-fixed" : ""}`}>
      <div className="container-fluid header-wrapper">
        <div className="colA">
          <Link href="/" className="logo">
            <Image
              src="/assets/logo.svg"
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
            <li>
              <Link href="/">Goa Travel Guide</Link>
            </li>
            <li>
              <Link href="/become-an-host">List Your Property</Link>
            </li>
            <li>
              <Link href="/">Our journal</Link>
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
              <li>
                <figure><Image src="/assets/icon/share.svg" width={24} height={24} alt="share" ></Image> </figure> Make an enquiry
              </li>
            </ul>
          </button>

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
              <li>
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
        </div>
      </div>
    </header>
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
    href:"https://wa.me/+919593266777",
  },
];