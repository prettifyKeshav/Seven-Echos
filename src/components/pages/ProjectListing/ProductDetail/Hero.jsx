"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Motion from "@/components/organisms/Animate";
import { GalleryBannerImg } from "@/data/ProductDetails/ProductDetails";

const Hero = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            Thumbs: false,
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <>
            <div className="project-detail-secA">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><Link href="/">Home</Link></li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                            </svg>
                        </span>
                        <li><Link href="/">Villas</Link></li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                            </svg>
                        </span>
                        <li><Link href="/" className="active">Villa Arts</Link></li>
                    </ul>

                    <div className="project-detail-banner">
                        <div className="grid-box">
                            {GalleryBannerImg.map((item, index) => (
                                <Link
                                    href={item.figureImage}
                                    data-fancybox="gallery"
                                    className="col"
                                    key={index}
                                >
                                    <Image
                                        src={item.figureImage}
                                        width={730}
                                        height={648}
                                        alt={`gallery-${index}`}
                                    />
                                </Link>
                            ))}
                            <div className="more-img-ico">
                                <figure>
                                    <Image src="/assets/icon/image-gallery-ico.svg" width={20} height={20} alt="ico" ></Image>
                                </figure>
                                <p>{GalleryBannerImg.length - 5}+</p>
                            </div>
                        </div>

                        <Motion variant='fadeUp'>
                            <div className="project-info">
                                <div className="col">
                                    <div className="item">
                                        <h1>Valla Arts </h1>
                                        <p>Assago, Goa</p>
                                    </div>
                                    <div className="item">
                                        <Image src="/assets/icon/star.svg" width={30} height={30} alt="star ico"></Image>
                                        <Image src="/assets/icon/star.svg" width={30} height={30} alt="star ico"></Image>
                                        <Image src="/assets/icon/star.svg" width={30} height={30} alt="star ico"></Image>
                                        <Image src="/assets/icon/star.svg" width={30} height={30} alt="star ico"></Image>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <Image src="/assets/icon/project-detail/user-ico.svg" width={30} height={30} alt="ico"  ></Image>
                                        </figure>
                                        <p>5 Guests</p>
                                    </div>
                                    <div className="item">
                                        <Image src="/assets/icon/project-detail/single-bed.svg" width={30} height={30} alt="ico"  ></Image>
                                        <p>3 Bedrooms</p>
                                    </div>
                                    <div className="item">
                                        <Image src="/assets/icon/project-detail/bathroom.svg" width={30} height={30} alt="ico"  ></Image>
                                        <p>3 Bathrooms</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="social-icon">
                                        <Link href="/" className="item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#000" fillRule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clipRule="evenodd" /></svg>
                                        </Link>
                                        <div className="item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeWidth="1.5"><path d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" /><path strokeLinecap="round" d="M14 6.5L9 10m5 7.5L9 14" /><path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" /></g></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Motion>
                    </div>

                </div>
            </div >
        </>
    );
};

export default Hero;