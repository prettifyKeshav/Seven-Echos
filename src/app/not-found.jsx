"use client"
import { useNotFound } from "@/context/useNotFoundContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
    const { setIsNotFound } = useNotFound()

    useEffect(() => {
        setIsNotFound(true)
    }, [])

    return (
        <>
            <section>
                <div className="not-found-banner">
                    <div className="content text-center">
                        <div className="logo">
                            <div className="">
                                <Image src="/assets/logo.svg" width={108} height={108} alt="ico"></Image>
                            </div>
                        </div>
                        <h1>PAGE NOT FOUND!</h1>
                        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                        <Link className="btn primary-btn" href="/">Back to Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
