"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
                        <li><Link href="/">Villas</Link></li>
                        <li><Link href="/" className="active">Villa Arts</Link></li>
                    </ul>

                    <div className="fancybox-sec">
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
                    </div>

                </div>
            </div>
        </>
    );
};

export default Hero;

const GalleryBannerImg = [
    {
        figureImage: "/assets/images/project/detail/fancybox-img/1.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/2.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/3.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/4.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/5.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/1.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/2.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/3.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/4.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/5.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/1.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/2.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/3.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/4.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/5.jpg",
    },
    {
        figureImage: "/assets/images/project/detail/fancybox-img/1.jpg",
    }
];